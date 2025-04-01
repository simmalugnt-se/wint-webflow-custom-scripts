import "../scss/main.scss";
import { Button } from "./components/Button";

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
