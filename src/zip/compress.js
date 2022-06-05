import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compress = async (file) => {
  const gzip = createGzip();

  const filePath = path.join(`${__dirname}/files/`, file);
  const compressedFilePath = path.join(`${__dirname}/files/`, "archive.gz");

  const inp = createReadStream(filePath);
  const out = createWriteStream(compressedFilePath);
  inp.pipe(gzip).pipe(out);
};
compress("fileToCompress.txt");
