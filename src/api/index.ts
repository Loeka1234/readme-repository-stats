import express from "express";
import { client } from "../client";

const router = express.Router();

router.get("/total-pull-request", async (req, res) => {
	const { name, owner } = req.query;
	if (
		!name ||
		typeof name !== "string" ||
		!owner ||
		typeof owner !== "string"
	)
		return res.sendStatus(400);

	try {
		const prs = await client
			.getTotalPullRequests({ name, owner })
			.then(data => data.data?.repository?.pullRequests.totalCount);
		return res.send(prs?.toString());
	} catch (err) {
		return res.sendStatus(400);
	}
});

export default router;
