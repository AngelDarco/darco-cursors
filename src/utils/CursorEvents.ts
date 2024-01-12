import styles from "../components/cursor-styles.module.css";

class CursorEvents {
  private container: HTMLDivElement;
  constructor(container: HTMLDivElement) {
    this.container = container;
  }

  private general() {
    this.container.classList.add(`${styles.general}`);
    this.container.querySelectorAll("button").forEach((el) => {
      if (el instanceof HTMLButtonElement)
        el.classList.add(`${styles.general}`);
    });
  }

  private pointer() {
    this.container.querySelectorAll("a").forEach((el) => {
      el.classList.add(`${styles.pointer}`);
    });
  }

  private text() {
    const elements = "input, textarea";
    this.container.querySelectorAll(elements).forEach((el) => {
      el.classList.add(`${styles.text}`);
    });
  }

  all() {
    this.general();
    this.pointer();
    this.text();
  }
}

export default CursorEvents;
