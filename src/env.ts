// src/env.mjs
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		GITHUB_API_URL: z.string().url().endsWith("/").optional().default("https://api.github.com"),
		GITHUB_API_TOKEN: z.string().min(1).optional().default(""),
		GITHUB_API_OWNER: z.string().min(1).optional().default(""),
		GITHUB_API_VERSION: z.string().min(1).optional().default(""),
		STAGE: z.enum(["development", "production", "test"]).optional().default("development"),
	},
	runtimeEnv: process.env,
});
