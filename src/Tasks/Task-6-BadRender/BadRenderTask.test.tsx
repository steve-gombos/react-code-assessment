import { fireEvent, render, screen } from "@testing-library/react";
import { BadRenderTask } from "./BadRenderTask";

describe("Counter Task:", () => {
  it("counter should NOT reset when the parent is rerendered", () => {
    render(<BadRenderTask />);

    const counterButton = screen.getByTitle("badRenderCounterButton");
    fireEvent.click(counterButton);
    fireEvent.click(counterButton);
    fireEvent.click(counterButton);

    const parentRerenderButton = screen.getByTitle("parentRerenderButton");
    fireEvent.click(parentRerenderButton);

    const counter = screen.getByTitle("badRenderCounter").textContent;
    expect(counter).toBe("3");
  });
});
