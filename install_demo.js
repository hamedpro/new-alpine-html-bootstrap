/* you are allowed to run this script when :
project must be just like when it is cloned 
then create env.json according to README.md 
then make sure there is not
a database with the same exact name of mongodb_db_name of
env.json 
then run it 
*/
import fs from "fs";
import { execSync } from "child_process";
import { MongoClient } from "mongodb";
import path from "path";
var { mongodb_url, mongodb_db_name } = JSON.parse(fs.readFileSync("./env.json", "utf8"));
var client = new MongoClient(mongodb_url);
var db = client.db(mongodb_db_name);

if (fs.existsSync("./demo_files/mongodb_collections")) {
	for (file_name of fs.readdirSync("./demo_files/mongodb_collections")) {
		for (document of JSON.parse(
			fs.readFileSync(path.join("./demo_files/mongodb_collections", file_name), "utf8")
		)) {
		}
	}
}
