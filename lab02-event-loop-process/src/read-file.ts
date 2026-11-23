import { readFile } from "fs/promises";
console.log("Reading file content:");
console.log(import.meta.url);
const content = await readFile(new URL("./index.ts", import.meta.url), "utf-8");
console.log(content);
