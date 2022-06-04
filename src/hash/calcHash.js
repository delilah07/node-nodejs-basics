import crypto from "crypto";
import { readFile } from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async (file) => {
  // Write your code here
  const filePath = path.join(`${__dirname}/files/`, file);
  readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log(crypto.createHash("sha256").update(data).digest("hex"));
  });
};
calculateHash("fileToCalculateHashFor.txt");
