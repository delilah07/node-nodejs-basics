import { access, mkdir } from "fs";
import { copyFile, readdir } from "fs/promises";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async (folder) => {
  const firstDir = path.join(__dirname, folder);
  const destDir = path.join(__dirname, `${folder}-copy`);

  access(destDir, async (err) => {
    if (!err) return console.error("FS operation failed");
    mkdir(destDir, { recursive: true }, (err) => {
      if (err) throw err;
    });
    const files = await readdir(firstDir, { withFileTypes: true }, (err) => {
      if (err) throw err;
    });
    console.log(files);
    files.forEach((file) => {
      let src = path.join(firstDir, file.name);
      let dest = path.join(destDir, file.name);
      if (file.isDirectory()) {
        copy(src, dest);
      } else {
        copyFile(src, dest);
      }
    });
  });
};
copy("files");
