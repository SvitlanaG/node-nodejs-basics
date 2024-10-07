import { Transform } from "node:stream";
import { throwError } from "../utils/customError.js";

const transform = async () => {
  process.stdin
    .pipe(reverseTransform)
    .pipe(process.stdout)
    .on("error", () => {
      throwError();
    });

  process.stdin.on("error", () => {
    throwError();
  });
};

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const data =
      encoding === "buffer" ? chunk.toString() : chunk.toString(encoding);
    this.push(data.split("").reverse().join(""));
    callback();
  },
});

await transform();
