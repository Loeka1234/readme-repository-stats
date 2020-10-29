import express from "express";
import { client } from "../client";
import { renderTotalPullRequests } from "../svg/renderTotalPullRequests";

const router = express.Router();

router.get("/total-pull-requests", async (req, res) => {
  const { name, owner } = req.query;
  if (!name || typeof name !== "string" || !owner || typeof owner !== "string")
    return res.sendStatus(400);

  res.setHeader("Content-Type", "image/svg+xml");

  try {
    const prs = await client
      .getTotalPullRequests({ name, owner })
      .then(data => data.data?.repository?.pullRequests.totalCount);

    if (typeof prs === "undefined") throw new Error();

    return res
      .set("Content-Type", "image/svg+xml")
      .send(renderTotalPullRequests(prs));
  } catch (err) {
    return res.sendStatus(400);
  }
});

export default router;
