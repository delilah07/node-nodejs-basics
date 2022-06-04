import { createWriteStream } from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { stdin } from "node:process";

export const write = async (file) => {
  const filePath = path.join(`${__dirname}/files/`, file);
  const stream = createWriteStream(filePath);
  stdin.pipe(stream);
};
write("fileToWrite.txt");
