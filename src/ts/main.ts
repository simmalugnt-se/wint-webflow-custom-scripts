import "../scss/main.scss";
import { Button } from "./components/Button";

document.addEventListener("DOMContentLoaded", () => {
  console.log('js running')

  const slot = document.querySelector('[data-slot="walkthrough"]');
  if (!slot) return;

  const validComponent = slot.querySelector('[data-component="walkthrough-item"]');

  if (!validComponent) {
    console.warn("⚠️ Walkthrough slot missing valid component");

    const warning = document.createElement("div");
    warning.innerHTML = `
      <strong>⚠️ Incorrect Component!</strong> Only use <em>Walkthrough Item</em> in this slot.
    `;
    warning.style.cssText = `
      background: #fff3cd;
      color: #856404;
      border: 2px dashed #856404;
      padding: 1rem;
      margin: 1rem 0;
      font-weight: bold;
    `;
    slot.prepend(warning);
  }

  const container = document.querySelector(".container");
  if (container) {
    const primaryButton = new Button({
      text: "Click me!",
      type: "primary",
      onClick: () => alert("Primary button clicked!xs"),
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

