import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async (file) => {
  const unzip = createUnzip();

  const filePath = path.join(`${__dirname}/files/`, file);
  const decompressedFilePath = path.join(`${__dirname}/files/`, "archive.gz");

  const inp = createReadStream(decompressedFilePath);
  const out = createWriteStream(filePath);
  inp.pipe(unzip).pipe(out);
};
compress("fileToCompress.txt");
