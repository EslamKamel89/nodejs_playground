import { randomUUID } from "crypto";
import { loadTasks, saveTasks } from "./storage.ts";

const tasks = await loadTasks();
tasks.push({
  id: randomUUID(),
  title: "Learn Node.js filesystem",
  completed: false,
});

await saveTasks(tasks);
console.table(tasks);
