import fsPromises from "node:fs/promises";
import { throwError } from "../utils/customError.js";

const copy = async () => {
  try {
    const src = "src/fs/files/";
    const dest = "src/fs/files_copy/";
    await fsPromises.cp(src, dest, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch {
    throwError();
  }
};
await copy();
