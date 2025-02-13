import axios from "axios";


console.log(process.env.NEXT_PUBLIC_API_URL , "ASDFFFFFFF");
const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		Accept: "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
		"Content-Type": "application/json",
	},
});

export { http };
