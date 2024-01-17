declare module "*.cur" {
  const value: string;
  export default value;
}
import CursorsStyles from "../utils/exportCursorStyles.ts";
import { CustomCursorsProps } from "./index";

declare const CursorsStyles: CustomCursorsProps;
export { CursorsStyles };
