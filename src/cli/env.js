import { env } from "node:process";

export const parseEnv = () => {
  for (let key in env) {
    console.log(`RSS_${key}=${env[key]}`);
  }
};
parseEnv();
