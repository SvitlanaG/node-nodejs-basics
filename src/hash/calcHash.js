import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { throwError } from "../utils/customError.js";

const calculateHash = async () => {
  try {
    const pathToFile = "src/hash/files/";
    const fileName = "fileToCalculateHashFor.txt";
    const hash = createHash("sha256");
    const stream = createReadStream(pathToFile + fileName);
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => {
      const hexHash = hash.digest("hex");
      console.log(`hex: ${hexHash}`);
    });

    stream.on("error", () => {
      throwError();
    });
  } catch {
    throwError();
  }
};

await calculateHash();
