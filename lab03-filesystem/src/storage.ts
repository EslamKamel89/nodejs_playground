import { mkdir, readFile, writeFile } from "node:fs/promises";
import { isTask, type Task } from "./types/task.ts";

const DATA_DIR = new URL("../data/", import.meta.url);
const FILE = new URL("tasks.json", DATA_DIR);

import { randomUUID } from "node:crypto";
import { rename, rm } from "node:fs/promises";

export async function saveTasks(tasks: Task[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });

  const temp = new URL(`${randomUUID()}.tmp`, DATA_DIR);

  try {
    await writeFile(temp, JSON.stringify(tasks, null, 2), {
      encoding: "utf8",
      flag: "wx",
      flush: true,
    });

    await rename(temp, FILE);
  } finally {
    await rm(temp, { force: true });
  }
}

export async function loadTasks(): Promise<Task[]> {
  try {
    const raw = await readFile(FILE, "utf-8");
    const data = await JSON.parse(raw);
    if (!Array.isArray(data) || !data.every(isTask)) {
      throw new Error("Invalid task storage format");
    }
    return data;
  } catch (error: unknown) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}
