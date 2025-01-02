import type { Endpoints } from "@octokit/types";

import { env } from "../env";

export const api = {
	listUserRepos: (queryParams?: ListRepoQueryParams) => {
		const params = new URLSearchParams(queryParams).toString();
		const url = `${env.GITHUB_API_URL}users/${env.GITHUB_API_OWNER}/repos?${params}`;

		return githubApi<Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"][]>(url);
	},
	repoReadme: (repo: string) => {
		const url = `${env.GITHUB_API_URL}repos/${env.GITHUB_API_OWNER}/${repo}/readme`;

		return githubApi<Endpoints["GET /repos/{owner}/{repo}/readme"]["response"]>(url);
	},
};

export default async function githubApi<T>(
	url: string,
	options: RequestInit = {},
): Promise<T | undefined> {
	const response = await fetch(url, {
		...options,
		method: options.method ?? "GET",
		headers: {
			"Authorization": `Bearer ${env.GITHUB_API_TOKEN}`,
			"Accept": "application/vnd.github+json",
			"X-GitHub-Api-Version": env.GITHUB_API_VERSION,
		},
	});

	if (!response.ok) {
		throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
	}

	return response.json();
}

declare interface ListRepoQueryParams {
	/** @default "owner" */
	type?: "all" | "owner" | "member";

	/** @default "full_name" */
	sort?: "created" | "updated" | "pushed" | "full_name";

	/** @default "30" */
	per_page?: number;

	/** @default "1" */
	page?: number;

	/** @default "asc" // when using `"full_name"`, otherwise `"desc"` */
	direction?: "asc" | "desc";

	[queryParam: string]: any;
}

export type RepositoryData = Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];
