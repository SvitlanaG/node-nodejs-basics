import fsPromises from "node:fs/promises";
import { throwError } from "../utils/customError.js";

const remove = async () => {
  try {
    const pathToFile = "src/fs/files/";
    const fileName = "fileToRemove.txt";
    await fsPromises.rm(pathToFile + fileName);
  } catch {
    throwError();
  }
};

await remove();
