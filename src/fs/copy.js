import { copyFile, constants, mkdir, readdir } from 'fs/promises';

const copy = async () => {
  const pathToFolder = new URL('./files', import.meta.url);
  const pathToCopyFolder = new URL('./files_copy', import.meta.url);

  try {
    const files = await readdir(pathToFolder);

    await mkdir(pathToCopyFolder);

    files.forEach(async (fileName) => {
      await copyFile(
        new URL(`./files/${fileName}`, import.meta.url),
        new URL(`./files_copy/${fileName}`, import.meta.url),
        constants.COPYFILE_EXCL
      );
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
