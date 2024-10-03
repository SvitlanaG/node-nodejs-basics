import fsPromises from "node:fs/promises";

const remove = async () => {
  try {
    const pathToFile = "src/fs/files/";
    const fileName = "fileToRemove.txt";
    await fsPromises.rm(pathToFile + fileName);
  } catch (error) {
    const errorMessage = "FS operation failed";
    throw Error(errorMessage);
  }
};

await remove();
