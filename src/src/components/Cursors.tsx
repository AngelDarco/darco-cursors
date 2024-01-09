import { useEffect, useRef, useState } from "react";
import { CursorProps } from "../types/types.d";
import CursorEvents from "../utils/CursorEvents";
import ImagesImport from "../utils/ImagesImport";
import { blue } from "../utils/LinksImages";
import styles from "./Cursors.module.css";

const Cursors = ({ children }: CursorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState({});

  useEffect(() => {
    ImagesImport(blue).then((res) => {
      setImages(res);
    });
  }, []);

  if (containerRef.current && images)
    new CursorEvents(containerRef.current, images).all();

  return (
    <div ref={containerRef} className={styles.mainContainer}>
      {children}
    </div>
  );
};

export default Cursors;
