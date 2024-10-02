import fsPromises from "node:fs/promises";

const copy = async () => {
  try {
    const src = "src/fs/files/";
    const dest = "src/fs/files_copy/";
    fsPromises.cp(src, dest, { recursive: true });
  } catch (error) {
    const errorMessage = "FS operation failed";
    throw Error(errorMessage);
  }
};
await copy();
