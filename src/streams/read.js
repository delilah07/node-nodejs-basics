import { createReadStream } from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { stdout } from "node:process";

export const read = async (file) => {
  const filePath = path.join(`${__dirname}/files/`, file);
  const stream = createReadStream(filePath);
  stream.pipe(stdout);
};
read("fileToRead.txt");
