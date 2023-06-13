import { readdir } from 'fs/promises';

const list = async () => {
  const pathToFolder = new URL('./files', import.meta.url);

  try {
    const files = await readdir(pathToFolder);

    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
