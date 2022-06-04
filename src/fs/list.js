import { access } from "fs";
import { readdir } from "fs/promises";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async (folder) => {
  const filesDir = path.join(__dirname, folder);
  access(filesDir, async (err) => {
    if (err) return console.error("FS operation failed");
    const files = await readdir(filesDir);
    console.log(files);
  });
};
list("files");
