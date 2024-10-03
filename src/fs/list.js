import fsPromises from "node:fs/promises";

const list = async () => {
  try {
    const path = "src/fs/files/";
    const files = await fsPromises.readdir(path, { recursive: true });
    for (const file of files) console.log(file);
  } catch (error) {
    console.error(error);
    const errorMessage = "FS operation failed";
    throw Error(errorMessage);
  }
};

await list();
