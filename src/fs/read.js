import fsPromises from "node:fs/promises";

const read = async () => {
  try {
    const pathToFile = "src/fs/files/";
    const fileName = "fileToRead.txt";
    const text = await fsPromises.readFile(pathToFile + fileName, {
      encoding: "utf8",
    });
    console.log(text);
  } catch (error) {
    const errorMessage = "FS operation failed";
    throw Error(errorMessage);
  }
};

await read();
