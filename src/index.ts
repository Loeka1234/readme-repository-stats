import dotenv from "dotenv-safe";
dotenv.config();
import express from "express";
import router from "./api/index";
import { client } from "./client";

const PORT = process.env.PORT || 3000;

const app = express();

const main = async () => {
	console.log(
		await client
			.getTotalPullRequests({
				name: "github-readme-stats",
				owner: "anuraghazra",
			})
			.then(res => res.data?.repository?.pullRequests)
	);

	app.use("/api", router);

	app.listen(PORT, () =>
		console.log(`Server listening on localhost:${PORT}`)
	);
};

main();
