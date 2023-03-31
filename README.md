# how to use:
after cloning this repo create an env.json file in this format (in root of repo): 
```
{
	"api_port": 4000,
	"api_endpoint": "http://localhost:4000",
	"frontend_port": 5000,
	"templateName": "corp_webapp",
	"mongodb_url": "mongodb://hamedpro:hamed@127.0.0.1:27017",
	"mongodb_db_name": "new_alpine_template",
	"jwt_secret": "aslk8403uf83f0nfsldfgdk"
}
```
then install dependencies with this command : 
```
npm i 
```
then run "dev" or "start" script like this : 
```
npm run dev
```
or 
```
npm start
```