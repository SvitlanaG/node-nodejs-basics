import { parentPort, workerData } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  try {
    const result = nthFibonacci(workerData.num);
    parentPort.postMessage(result);
  } catch (err) {
    parentPort.postMessage("error");
  }
};

sendResult();
