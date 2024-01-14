import { useEffect, useRef, useState } from "react";
import { CursorsProps, CustomCursorsProps } from "../types";
import CursorEvents from "../utils/CursorEvents";
import resolveCursorImports from "../utils/resolveCursorImports";
import defaultCursors from "../utils/cursorsDB";
import styles from "./cursor-styles.module.css";
import ChangeCursors from "../utils/ChangeCursors";
import cursorsStyles from "../utils/exportCursorStyles";

const Cursors = ({ ...props }: CursorsProps) => {
  const { children, type, customCursors, style, className } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [typeCursors, setTypeCursors] = useState<CustomCursorsProps>();

  /* retrieve cursors from local database */
  useEffect(() => {
    if (typeCursors)
      resolveCursorImports(typeCursors).then((res) => {
        if (containerRef.current)
          new ChangeCursors(res, containerRef.current).all();
      });
  }, [typeCursors]);

  /* change cursors between default colors - type*/
  useEffect(() => {
    if (!customCursors && type) {
      const newCursor = defaultCursors[type as keyof typeof defaultCursors];
      setTypeCursors(newCursor);
    } else if (customCursors) {
      /* change cursors to users customCursors values - customCursors */
      setTypeCursors(customCursors);
    } else {
      setTypeCursors(defaultCursors.blue);
    }
  }, [customCursors, type]);

  /* change cursors to the default color if type is not set - blue */
  useEffect(() => {
    if (containerRef.current) new CursorEvents(containerRef.current).all();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.mainContainer} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export { cursorsStyles };
export default Cursors;
