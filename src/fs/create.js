import fsPromises from "node:fs/promises";
import { throwError } from "../utils/customError.js";

const create = async () => {
  try {
    const pathToSave = "src/fs/files/";
    const fileName = "fresh.txt";
    const fileContent = "I am fresh and young";
    const exists = await fileExists(pathToSave + fileName);
    if (exists) {
      throwError();
    }
    await fsPromises.writeFile(pathToSave + fileName, fileContent);
  } catch {
    throwError();
  }
};

const fileExists = async (filePath) => {
  try {
    await fsPromises.access(filePath);
    return true;
  } catch (err) {
    if (err.code === "ENOENT") {
      return false;
    }
  }
};

create();
