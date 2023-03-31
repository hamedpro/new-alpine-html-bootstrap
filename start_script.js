import { exec } from "child_process";
import fs from "fs";

var { frontend_port } = JSON.parse(fs.readFileSync("./env.json", "utf8"));

var tmp = exec(`vite build && node ./frontend_server.js  & nodemon ./src/api/index.js`);
tmp.stdout.on("data", (data) => console.log(data));
tmp.stderr.on("data", (data) => console.log(data));
