import cursorsStyles from "./exportCursorStyles";

class CursorEvents {
  private container: HTMLDivElement;
  constructor(container: HTMLDivElement) {
    this.container = container;
  }

  private general() {
    this.container.classList.add(`${cursorsStyles.general}`);
    this.container.querySelectorAll("button").forEach((el) => {
      if (el instanceof HTMLButtonElement)
        el.classList.add(`${cursorsStyles.general}`);
    });
  }

  private pointer() {
    this.container.querySelectorAll("a").forEach((el) => {
      el.classList.add(`${cursorsStyles.pointer}`);
    });
  }

  private text() {
    const elements = "input, textarea";
    this.container.querySelectorAll(elements).forEach((el) => {
      el.classList.add(`${cursorsStyles.text}`);
    });
  }

  all() {
    this.general();
    this.pointer();
    this.text();
  }
}

export default CursorEvents;
