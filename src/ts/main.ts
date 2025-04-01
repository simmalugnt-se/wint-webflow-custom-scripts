interface ButtonConfig {
  text: string;
  type: "primary" | "secondary";
  onClick: () => void;
}

class Button {
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

// Example usage
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  if (container) {
    const primaryButton = new Button({
      text: "Click me!",
      type: "primary",
      onClick: () => alert("Primary button clicked!"),
    });

    const secondaryButton = new Button({
      text: "Cancel",
      type: "secondary",
      onClick: () => alert("Secondary button clicked!"),
    });

    container.appendChild(primaryButton.render());
    container.appendChild(secondaryButton.render());
  }
});
