import zlib from "zlib";
import fs from "fs";
import { throwError } from "../utils/customError.js";

const compress = async () => {
  const gzip = zlib.createGzip();
  const pathToFile = "src/zip/files/";
  const fileNameOriginal = "fileToCompress.txt";
  const fileNameArchive = "archive.gz";
  const input = fs.createReadStream(pathToFile + fileNameOriginal);
  const output = fs.createWriteStream(pathToFile + fileNameArchive);

  input.pipe(gzip).pipe(output);

  input.on("error", () => {
    throwError();
  });

  output.on("error", () => {
    throwError();
  });

  gzip.on("error", () => {
    throwError();
  });
};

await compress();
