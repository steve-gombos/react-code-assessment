import { fireEvent, render, screen } from "@testing-library/react";
import { PropPassing } from "./PropPassing";

describe("Prop Passing Task:", () => {
  it("child component should not reveal message on initial load", () => {
    render(<PropPassing />);

    const message = screen.getByTitle("propPassingHiddenMessage").textContent;
    expect(message).toBe("");
  });
  it("child component should reveal message when button is clicked", () => {
    render(<PropPassing />);

    const messageToggleButton = screen.getByTitle("propPassingButton");
    fireEvent.click(messageToggleButton);

    const message = screen.getByTitle("propPassingHiddenMessage").textContent;
    expect(message).toBe("Task passed succesfully!");

    fireEvent.click(messageToggleButton);
    const secondMessage = screen.getByTitle(
      "propPassingHiddenMessage"
    ).textContent;
    expect(secondMessage).toBe("");
  });
});
