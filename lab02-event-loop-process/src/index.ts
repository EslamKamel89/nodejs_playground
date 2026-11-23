import { setTimeout as sleep } from "node:timers/promises";

async function task(name: string): Promise<void> {
  console.log(`${name}: started`);
  await sleep(1000);
  console.log(`${name}: completed`);
}
// await Promise.all([task("Task 1"), task("Task 2"), task("Task 3")]);
await task("Task 1");
await task("Task 2");
await task("Task 3");
