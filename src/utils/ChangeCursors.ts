import { CustomCursorsProps } from "../types";

class ChangeCursors {
  private cursors: CustomCursorsProps;
  private container: HTMLDivElement;
  constructor(cursors: CustomCursorsProps, container: HTMLDivElement) {
    if (!container || !(container instanceof HTMLDivElement)) {
      throw new Error("Invalid container provided.");
    }
    this.cursors = cursors;
    this.container = container;
  }

  private general() {
    if (this.cursors.general)
      this.container.style.setProperty(
        "--cursor-general",
        `url(${this.cursors.general})`
      );
  }

  private pointer() {
    if (this.cursors.pointer)
      this.container.style.setProperty(
        "--cursor-pointer",
        `url(${this.cursors.pointer})`
      );
  }

  private text() {
    if (this.cursors.text)
      this.container.style.setProperty(
        "--cursor-text",
        `url(${this.cursors.text})`
      );
  }

  all() {
    this.general();
    this.pointer();
    this.text();
  }
}
export default ChangeCursors;
