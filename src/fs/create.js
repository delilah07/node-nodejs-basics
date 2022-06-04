import { access, writeFile } from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async (file) => {
  const filePath = path.join(`${__dirname}/files/`, file);
  access(filePath, (err) => {
    if (!err) return console.error("FS operation failed");
    writeFile(filePath, "I am fresh and young", (err) => {
      if (err) throw err;
    });
  });
};
create("fresh.txt");
