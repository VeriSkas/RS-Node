import { env } from 'process';

const parseEnv = () => {
  for (var item in env) {
    if (item.match(/^RSS_/)) {
      console.log(`${item}=${env[item]}`);
    }
  }
};

parseEnv();
