import { useEffect, useRef, useState } from "react";
import { CursorProps, CustomCursors } from "../types/types.d";
import CursorEvents from "../utils/CursorEvents";
import ImagesImport from "../utils/ImagesImport";
import defaultCursors from "../utils/cursorsDB";
import styles from "./cursor-styles.module.css";
import ChangeCursors from "../utils/ChangeCursors";

const Cursors = ({ children, type, custom }: CursorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [typeCursors, setTypeCursors] = useState<CustomCursors>();

  /* retrieve cursors from local database */
  useEffect(() => {
    if (typeCursors)
      ImagesImport(typeCursors).then((res) => {
        if (containerRef.current)
          new ChangeCursors(res, containerRef.current).all();
      });
  }, [typeCursors]);

  /* change cursors between default colors - type*/
  useEffect(() => {
    if (!custom && type) {
      const newCursor = defaultCursors[type as keyof typeof defaultCursors];
      setTypeCursors(newCursor);
    } else if (custom) {
      /* change cursors to users custom values - custom */
      setTypeCursors(custom);
    } else {
      setTypeCursors(defaultCursors.blue);
    }
  }, [custom, type]);

  /* change cursors to the default color if type is not set - blue */
  useEffect(() => {
    if (containerRef.current) new CursorEvents(containerRef.current).all();
  }, []);

  return (
    <div ref={containerRef} className={styles.mainContainer}>
      {children}
    </div>
  );
};

export default Cursors;
