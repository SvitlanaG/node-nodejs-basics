import fsPromises from "node:fs/promises";

const create = async () => {
  try {
    const pathToSave = "src/fs/files/";
    const fileName = "fresh.txt";
    const fileContent = "I am fresh and young";
    await fsPromises.writeFile(pathToSave + fileName, fileContent);
  } catch (error) {
    const errorMessage = "FS operation failed";
    throw Error(errorMessage);
  }
};
create();
