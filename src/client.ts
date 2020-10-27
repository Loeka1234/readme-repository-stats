import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphqlSDK";

const { TOKEN } = process.env;

const _client = new GraphQLClient("https://api.github.com/graphql", {
	headers: {
		Authorization: "Bearer " + TOKEN,
	},
});

export const client = getSdk(_client);
