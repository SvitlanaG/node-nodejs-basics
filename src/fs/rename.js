import fsPromises from "node:fs/promises";
import { throwError } from "../utils/customError.js";

const rename = async () => {
  try {
    const oldPath = "src/fs/files/wrongFilename.txt";
    const newPath = "src/fs/files/properFilename.md";
    await fsPromises.rename(oldPath, newPath);
  } catch {
    throwError();
  }
};

await rename();
