import fs from "fs";
import { throwError } from "../utils/customError.js";

const write = async () => {
  const pathToFile = "src/streams/files/";
  const fileName = "fileToWrite.txt";
  const writeStream = fs.createWriteStream(pathToFile + fileName);
  process.stdin.pipe(writeStream);
  process.stdin.resume();
  writeStream.on("finish", () => {
    console.log("Data successfully written to the file.");
  });
  writeStream.on("error", () => {
    throwError();
  });
};

await write();
