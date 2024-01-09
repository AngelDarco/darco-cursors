import { CustomCursors } from "../types/types";

interface ImagesImportProps {
  [key: string]: string;
}

async function ImagesImport(obj: ImagesImportProps) {
  const arr: CustomCursors = {};
  for (const [key, value] of Object.entries(obj)) {
    const res = await loadImage(value);
    arr[key as keyof CustomCursors] = res;
  }
  return arr;
}

const loadImage = async (fileName: string) => {
  const imgModule = await import(fileName);
  return imgModule.default;
};

export default ImagesImport;
