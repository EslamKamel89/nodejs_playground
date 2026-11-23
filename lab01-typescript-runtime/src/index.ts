import { config, type AppConfig } from "./config.ts";

function describeService(settings: AppConfig): string {
  return [
    `Service: ${settings.name}`,
    `Port: ${settings.port}`,
    `Environment: ${settings.environment}`,
    `Node.js: ${process.version}`,
  ].join("\n");
}
console.log(describeService(config));
// the code below make the command `node src/index.ts` don't work
// enum Status {
//   Active,
//   Inactive,
// }
// console.log(Status.Active);
