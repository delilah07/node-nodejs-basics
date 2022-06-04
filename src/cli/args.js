import { argv } from "node:process";

export const parseArgs = () => {
  const newArr = argv.slice(2);
  newArr.forEach((val, index) => {
    if (!(index % 2)) console.log(`${val.slice(2)} is ${newArr[index + 1]}`);
  });
};
parseArgs();

// node src/cli/args.js --propName value --prop2Name value2
