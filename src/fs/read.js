import { access, readFile } from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async (file) => {
  const filePath = path.join(`${__dirname}/files/`, file);
  access(filePath, (err) => {
    if (err) return console.error("FS operation failed");
    readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
};

read("fileToRead.txt");
