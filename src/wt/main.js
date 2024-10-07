import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  const numOfCores = cpus().length;
  const workersArr = [];
  const results = [numOfCores];
  const pathToFile = "./src/wt/";
  const fileName = "worker.js";

  const handleWorkerMessage = (workerIndex, message) => {
    results[workerIndex] = {
      status: "resolved",
      data: message,
    };
    checkWorkerStatus();
  };

  const handleWorkerError = (workerIndex) => {
    results[workerIndex] = {
      status: "error",
      data: null,
    };
    checkWorkerStatus();
  };

  let completedWorkers = 0;

  const checkWorkerStatus = () => {
    completedWorkers += 1;
    if (completedWorkers === numOfCores) {
      console.log("Results:", results);
    }
  };

  for (let i = 0; i < numOfCores; i++) {
    const worker = new Worker(pathToFile + fileName, {
      workerData: { num: 10 + i },
    });

    worker.on("message", (result) => handleWorkerMessage(i, result));
    worker.on("error", () => handleWorkerError(i));

    workersArr.push(worker);
  }
};

await performCalculations();
