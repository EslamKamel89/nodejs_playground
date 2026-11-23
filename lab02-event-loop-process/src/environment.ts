const rawPort = process.env.PORT ?? -1;
const port = Number(rawPort);
if (!Number.isInteger(port) || port <= 0 || port > 65535)
  throw new Error(`Invalid port: ${rawPort}`);
console.log(`Server will run on port: ${port}`);
