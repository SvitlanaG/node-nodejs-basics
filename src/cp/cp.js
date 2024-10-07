import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
  const pathToFile = "src/cp/files/";
  const fileName = "script.js";
  const child = spawn("node", [pathToFile + fileName, ...args], {
    stdio: ["pipe", "pipe", "inherit", "ipc"],
  });
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on("message", (data) => {
    console.log(`Received from child process via IPC: ${data}`);
  });
};
const someArgument1 = "Test";
const someArgument2 = 123;

// Put your arguments in function call to test this functionality
spawnChildProcess([someArgument1, someArgument2]);
