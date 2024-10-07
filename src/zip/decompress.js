import zlib from "zlib";
import fs from "fs";
import { throwError } from "../utils/customError.js";

const decompress = async () => {
  const unzip = zlib.createUnzip();
  const pathToFile = "src/zip/files/";
  const fileNameOriginal = "fileToCompress.txt";
  const fileNameArchive = "archive.gz";
  const input = fs.createReadStream(pathToFile + fileNameArchive);
  const output = fs.createWriteStream(pathToFile + fileNameOriginal);

  input.pipe(unzip).pipe(output);

  input.on("error", () => {
    throwError();
  });

  output.on("error", () => {
    throwError();
  });

  unzip.on("error", () => {
    throwError();
  });
};

await decompress();
