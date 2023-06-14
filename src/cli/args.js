import { argv } from 'process';

const parseArgs = () => {
  argv.forEach((item, i) => {
    if (item.match(/^--/)) {
      console.log(`${item} is ${argv[i + 1]}`);
    }
  });
};

parseArgs();
