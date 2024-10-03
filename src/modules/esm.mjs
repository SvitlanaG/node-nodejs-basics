import path from "path";
import { fileURLToPath } from 'url';
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import * as a from "./files/a.json" with { type: "json" };
import * as b from "./files/b.json" with { type: "json" };
import * as c from "./files/c.js";

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let randomData;

if (random > 0.5) {
  randomData = a;
} else {
  randomData = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(randomData);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {randomData, myServer};
