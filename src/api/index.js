import { generator } from "./customRouter1.js";
import express from "express";
import { readFileSync } from "fs";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";
import jwt from "jsonwebtoken";
var { api_port, mongodb_url, mongodb_db_name, jwt_secret } = JSON.parse(
	readFileSync("./env.json", "utf-8")
);
var client = new MongoClient(mongodb_url);
var db = client.db(mongodb_db_name);
var app = express();
app.use(cors());
app.use("/static/assets", express.static("./src/assets"));
app.use(generator(db));

app.listen(api_port, () => console.log(`server started listening on port ${api_port} ...`));
