import { CustomCursorsProps } from "../types";

async function resolveCursorImports(obj: CustomCursorsProps) {
  const arr: CustomCursorsProps = {
    general: "",
    pointer: "",
    text: "",
  };
  for (const [key, value] of Object.entries(obj)) {
    const res = await loadImage(value);
    arr[key as keyof CustomCursorsProps] = res;
  }
  return arr;
}

const loadImage = async (fileName: string) => {
  const imgModule = await import(fileName); /* @vite-ignore */
  return imgModule.default;
};

export default resolveCursorImports;
