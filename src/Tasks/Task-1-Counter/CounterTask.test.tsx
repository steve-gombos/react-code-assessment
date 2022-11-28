import { fireEvent, render, screen } from "@testing-library/react";
import { CounterTask } from "./CounterTask";

describe("Counter Task:", () => {
  it("useEffect should reset counter to 0 after it reaches 5:", () => {
    render(<CounterTask />);
    const button = screen.getByTitle("counterTaskButton");
    fireEvent.click(button);
    const counterInitial = screen.getByTitle("counterTask").textContent;
    expect(counterInitial).toBe("1");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    const counterMid = screen.getByTitle("counterTask").textContent;
    expect(counterMid).toBe("4");
    fireEvent.click(button);
    const counterEnd = screen.getByTitle("counterTask").textContent;
    expect(counterEnd).toBe("0");
  });
});
