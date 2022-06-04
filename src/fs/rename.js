import { access, rename as renameFile } from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async (oldName, newName) => {
  const oldFilePath = path.join(`${__dirname}/files/`, oldName);
  const newFilePath = path.join(`${__dirname}/files/`, newName);

  access(!oldFilePath || newFilePath, (err) => {
    if (!err) return console.error("FS operation failed");
    renameFile(oldFilePath, newFilePath, (err) => {
      if (err) throw err;
    });
  });
};

rename("wrongFilename.txt", "properFilename.md");
