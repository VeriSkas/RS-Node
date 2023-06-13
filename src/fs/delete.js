import { unlink } from 'fs/promises';

const remove = async () => {
  const fileToRemoveName = 'fileToRemove.txt';
  const pathToFileToRemoveName = new URL(`./files/${fileToRemoveName}`, import.meta.url);

  try {
    await unlink(pathToFileToRemoveName);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
