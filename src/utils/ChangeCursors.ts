import { CustomCursors } from "../types/types";

class ChangeCursors {
  private cursors: CustomCursors;
  private container: HTMLDivElement;
  constructor(cursors: CustomCursors, container: HTMLDivElement) {
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
