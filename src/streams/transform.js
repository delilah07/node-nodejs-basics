import { stdin, stdout } from "node:process";
import { Transform } from "stream";

export const transform = async () => {
  const uppercase = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().toUpperCase());
    },
  });
  stdin.pipe(uppercase).pipe(stdout);
};
transform();
