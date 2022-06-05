import { Worker } from "worker_threads";

export const performCalculations = async (workerData) => {
  // Write your code here
};
const run = async () => {
  const result = await runService("world");
  console.log(result);
};

run().catch((err) => console.error(err));
