import fs from 'fs/promises';

const rename = async () => {
  const oldFileName = 'wrongFilename.txt';
  const newFileName = 'properFilename.md';
  const pathToOldFile = new URL(`./files/${oldFileName}`, import.meta.url);
  const pathToNewFile = new URL(`./files/${newFileName}`, import.meta.url);

  try {
    await fs.rename(pathToOldFile, pathToNewFile);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();
