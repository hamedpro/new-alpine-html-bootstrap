import { Router } from "express";
import express from "express";
import cors from "cors";
import formidable from "formidable";
import path from "path";
import fs from "fs";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
var { jwt_secret } = JSON.parse(fs.readFileSync("./env.json", "utf8"));
export function generator(db) {
	var customRouter1 = Router();
	if (fs.existsSync("./uploads") !== true) fs.mkdirSync("./uploads");

	customRouter1.use(cors());
	customRouter1.use(express.json());
	customRouter1.post("/collections/:collection_name", async (req, res) => {
		//body should be like this : {document : object}
		//response is json stringified of id of new document
		var { insertedId } = await db
			.collection(req.params.collection_name)
			.insertOne(req.body.document);
		res.json(insertedId);
	});
	customRouter1.get("/collections/:collection_name", async (req, res) => {
		//body should be like this :{filters : {}}
		//response contains an array of documents that match filters passed in body
		var filters = req.body.filters || {};
		if (Object.keys(filters).includes("_id")) {
			filters["_id"] = ObjectId(filters["_id"]);
		}
		res.json(await db.collection(req.params.collection_name).find(filters).toArray());
	});
	customRouter1.patch("/collections/:collection_name", async (req, res) => {
		//body must be like : {update_filter : object, update_set : object}
		//updates every document in that collection matching that filters
		//response is what .updateMany method returns
		var update_filter = req.body.update_filter;
		if (update_filter._id !== undefined) {
			update_filter._id = ObjectId(update_filter._id);
		}
		var update_statement = await db
			.collection(req.params.collection_name)
			.updateMany(update_filter, { $set: req.body.update_set });
		res.json(update_statement);
	});
	customRouter1.delete("/collections/:collection_name", async (req, res) => {
		//body should look like this : {filters : object}
		//deletes all documents which match that filters in that collection
		//response is what .deleteMany of mongodb returns

		var filters = req.body.filters;
		if (Object.keys(filters).includes("_id")) {
			filters["_id"] = ObjectId(filters["_id"]);
		}
		res.json(await db.collection(req.params.collection_name).deleteMany(filters));
	});
	customRouter1.get("/files/:file_id", async (request, response) => {
		response.sendFile(
			path.resolve(
				`./uploads/${fs
					.readdirSync("./uploads")
					.find((i) => i.startsWith(request.params.file_id))}`
			)
		);
	});
	customRouter1.post("/files", async (request, response) => {
		//saves the file with key = "file" inside sent form inside ./uploads directory
		//returns json : {file_id : string }
		//saved file name + extension is {file_id}-{original file name with extension }
		var file_id = await new Promise((resolve, reject) => {
			var f = formidable({ uploadDir: "./uploads" });
			f.parse(request, (err, fields, files) => {
				console.log(files);
				if (err) {
					reject(err);
					return;
				}
				var file_id = `${new Date().getTime()}${Math.round(Math.random() * 10000)}`;
				var new_file_path = path.resolve(
					"./uploads",
					`${file_id}-${files["file"].originalFilename}`
				);

				fs.renameSync(files["file"].filepath, new_file_path);
				resolve(file_id);
				return;
			});
		});
		response.json({ file_id });
	});
	customRouter1.post("/auth/password_verification", async (request, response) => {
		//body schema : user_id : string , password : any
		var user = await db
			.collection("users")
			.findOne({ _id: new ObjectId(request.body.user_id) });
		if (user === null) {
			response.status(404).json("user you are looking for doesnt exist");
			return;
		}

		if (request.body.password === user.password) {
			response.json({
				verified: true,

				jwt: jwt.sign(
					{
						user_id: user._id,
					},
					jwt_secret
				),
			});
			return;
		} else {
			response.json({
				verified: false,
			});
			return;
		}
	});
	return customRouter1;
}
