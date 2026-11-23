import { monitorEventLoopDelay, performance } from "node:perf_hooks";
const monitor = monitorEventLoopDelay({
  resolution: 10,
});
monitor.enable();
setTimeout(() => {
  console.log("Timer executed");
  console.log(`Max delay: ${(monitor.max / 1e6).toFixed(2)} ms`);
  monitor.disable();
}, 100);
const START = performance.now();
while (performance.now() - START < 10000) {
  // Blocking the event loop for 10 seconds
}
console.log("CPU work finished");
