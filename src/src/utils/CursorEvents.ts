import { CustomCursors } from "../types/types";

class CursorEvents {
  private cursorsObj: CustomCursors;
  private container: HTMLDivElement;
  constructor(container: HTMLDivElement, cursorsObj: CustomCursors) {
    this.cursorsObj = cursorsObj;
    this.container = container;
  }

  general() {
    const { general } = this.cursorsObj;
    this.container.style.cursor = `url(${general}), default`;
  }

  all() {
    this.general();
  }
}

export default CursorEvents;
