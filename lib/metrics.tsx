import { cache } from "react";
import { Octokit } from "@octokit/rest";

export async function getTweetCount() {
  if (!process.env.TWITTER_API_TOKEN) {
    return 0;
  }

  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/brigati_filippo?user.fields=public_metrics`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    }
  );

  const { data } = await response.json();
  return Number(data.public_metrics.tweet_count);
}

export const getCommitCount = cache(async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const req = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "filippo-brigati",
    repo: "filippobrigati",
  });

  return req.data.subscribers_count;
});
