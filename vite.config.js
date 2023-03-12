import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "fs";
var { api_port, frontend_port, api_endpoint } = JSON.parse(fs.readFileSync("./env.json", "utf-8"));
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: frontend_port,
		strictPort: true,
	},
	define: {
		api_endpoint: JSON.stringify(api_endpoint),
	},
});
