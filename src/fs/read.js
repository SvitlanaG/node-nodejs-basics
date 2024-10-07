import fsPromises from "node:fs/promises";
import { throwError } from "../utils/customError.js";

const read = async () => {
  try {
    const pathToFile = "src/fs/files/";
    const fileName = "fileToRead.txt";
    const text = await fsPromises.readFile(pathToFile + fileName, {
      encoding: "utf8",
    });
    console.log(text);
  } catch {
    throwError();
  }
};

await read();
