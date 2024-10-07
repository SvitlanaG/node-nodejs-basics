import fsPromises from "node:fs/promises";
import { throwError } from "../utils/customError.js";

const list = async () => {
  try {
    const path = "src/fs/files/";
    const files = await fsPromises.readdir(path, { recursive: true });
    for (const file of files) console.log(file);
  } catch {
    throwError();
  }
};

await list();
