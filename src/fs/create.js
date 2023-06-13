import { readdir, writeFile } from 'fs/promises';

const create = async () => {
  const newFileName = 'fresh.txt';
  const pathToFolder = new URL(`./files`, import.meta.url);
  const newFilePath = new URL(`./files/${newFileName}`, import.meta.url);

  try {
    const files = await readdir(pathToFolder);
    const file = files.find((fileName) => fileName === newFileName);

    if (!file) {
      await writeFile(newFilePath, 'I am fresh and young');
    } else {
      throw new Error('FS operation failed');
    }
  } catch (error) {
    console.log('error', error);
  }
};

await create();
