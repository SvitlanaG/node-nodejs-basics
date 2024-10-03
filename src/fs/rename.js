import fsPromises from "node:fs/promises";

const rename = async () => {
  try {
    const oldPath = "src/fs/files/wrongFilename.txt";
    const newPath = "src/fs/files/properFilename.md";
    fsPromises.rename(oldPath, newPath);
  } catch (error) {
    const errorMessage = "FS operation failed";
    throw Error(errorMessage);
  }
};

await rename();
