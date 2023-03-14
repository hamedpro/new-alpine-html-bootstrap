import { MongoClient } from "mongodb";
import fs from "fs";
import { exit } from "process";
var { mongodb_url, mongodb_db_name } = JSON.parse(fs.readFileSync("../../env.json"));
var db = new MongoClient(mongodb_url).db(mongodb_db_name);

/* db.collection("products").updateMany(
	{},
	{ $set: { product_category_id: "641077c2f6dc2719a660c322" } }
); */
