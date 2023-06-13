import { readFile } from 'fs/promises';

const read = async () => {
  const fileToReadName = 'fileToRead.txt';
  const filePath = new URL(`./files/${fileToReadName}`, import.meta.url);

  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });

    console.log(contents);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
