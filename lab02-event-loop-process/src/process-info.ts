console.log({
  pid: process.pid,
  nodeVersion: process.version,
  platform: process.platform,
  architecture: process.arch,
  cwd: process.cwd(),
  filename: import.meta.filename,
  dirname: import.meta.dirname,
  arguments: process.argv.slice(2),
});
