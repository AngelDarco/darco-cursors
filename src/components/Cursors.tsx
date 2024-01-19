import { useEffect, useRef, useState } from "react";
import { CursorsProps, CustomCursorsProps } from "../types";
import CursorEvents from "../utils/CursorEvents";
import defaultCursors from "../utils/cursorsDB";
import styles from "./cursor-styles.module.css";
import ChangeCursors from "../utils/ChangeCursors";

const Cursors = ({ ...props }: CursorsProps) => {
  const { children, type, customCursors, className, style } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [typeCursors, setTypeCursors] = useState<CustomCursorsProps>();

  /* retrieve cursors from local database */
  useEffect(() => {
    if (typeCursors)
      if (containerRef.current)
        new ChangeCursors(typeCursors, containerRef.current).all();
  }, [typeCursors]);

  /* change cursors between default colors - type*/
  useEffect(() => {
    if (!customCursors && type) {
      const newCursor = defaultCursors[type as keyof typeof defaultCursors];
      setTypeCursors(newCursor);
    } else if (customCursors) {
      /* change cursors to users custom cursors values - customCursors */
      setTypeCursors(customCursors);
    } else {
      /* change cursors to the default color if type is not set - blue */
      setTypeCursors(defaultCursors.blue);
    }
  }, [customCursors, type]);

  useEffect(() => {
    if (containerRef.current) new CursorEvents(containerRef.current).all();
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={`${styles.mainContainer}  ${className ? className : ""}`}
      style={style && style}
    >
      {children}
    </div>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default Cursors;
