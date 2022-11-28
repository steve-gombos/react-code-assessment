import { fireEvent, render, screen } from "@testing-library/react";
import { UseStateTask } from "./UseStateTask";

describe("UseState Task:", () => {
  it("useState should accept new input value and print it on the page:", () => {
    render(<UseStateTask />);
    const input = screen.getByTitle("useStateTaskInput");
    fireEvent.change(input, { target: { value: "This is the first test" } });
    const result1 = screen.getByTitle("useStateTask").textContent;
    expect(result1).toBe("This is the first test");
    fireEvent.change(input, { target: { value: "This is the second test" } });
    const result2 = screen.getByTitle("useStateTask").textContent;
    expect(result2).toBe("This is the second test");
    fireEvent.change(input, { target: { value: "This is the last test" } });
    const result3 = screen.getByTitle("useStateTask").textContent;
    expect(result3).toBe("This is the last test");
  });
});
