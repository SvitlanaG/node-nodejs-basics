import fs from "fs";
import { throwError } from "../utils/customError.js";

const read = async () => {
  let data = "";
  const pathToFile = "src/streams/files/";
  const fileName = "fileToRead.txt";
  const readerStream = fs.createReadStream(pathToFile + fileName);
  readerStream.setEncoding("UTF8");

  readerStream.on("data", function (chunk) {
    data += chunk;
  });

  readerStream.on("end", function () {
    console.log(data);
  });

  readerStream.on("error", function () {
    throwError();
  });
};

await read();
