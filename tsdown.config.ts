import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./lib/index.ts"],
	outDir: "./dist",
	format: ["cjs", "esm", "iife"],
	sourcemap: true,
	dts: true,
	tsconfig: "./tsconfig.json",
	target: "esnext",
});
