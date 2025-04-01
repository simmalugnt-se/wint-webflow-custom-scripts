export interface ButtonConfig {
  text: string;
  type: "primary" | "secondary";
  onClick: () => void;
}

export class Button {
  private element: HTMLButtonElement;

  constructor(config: ButtonConfig) {
    this.element = document.createElement("button");
    this.element.textContent = config.text;
    this.element.className = `button button--${config.type}`;
    this.element.addEventListener("click", config.onClick);
  }

  render(): HTMLButtonElement {
    return this.element;
  }
}
