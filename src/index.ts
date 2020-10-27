import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphqlSDK";
import dotenv from "dotenv-safe";

dotenv.config();

const main = async () => {
	const _client = new GraphQLClient("https://api.github.com/graphql", {
		headers: {
			Authorization: "Bearer " + process.env.TOKEN,
		},
	});

	const client = getSdk(_client);

	console.log(
		await client
			.getTotalPullRequests({
				name: "github-readme-stats",
				owner: "anuraghazra",
			})
			.then(res => res.data?.repository?.pullRequests)
	);
};

main();
