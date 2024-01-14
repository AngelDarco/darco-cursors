import { CustomCursorsProps } from "../types";
interface ImagesImportProps {
  [key: string]: string;
}

async function resolveCursorImports(obj: ImagesImportProps) {
  const arr: CustomCursorsProps = {};
  for (const [key, value] of Object.entries(obj)) {
    const res = await loadImage(value);
    arr[key as keyof CustomCursorsProps] = res;
  }
  return arr;
}

const loadImage = async (fileName: string) => {
  const imgModule = await import(fileName);
  return imgModule.default;
};

export default resolveCursorImports;
