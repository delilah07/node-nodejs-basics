import { access, unlink } from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async (name) => {
  const filePath = path.join(`${__dirname}/files/`, name);
  access(filePath, (err) => {
    if (err) return console.error("FS operation failed");
    unlink(filePath, (err) => {
      if (err) throw err;
    });
  });
};
remove("fileToRemove.txt");
