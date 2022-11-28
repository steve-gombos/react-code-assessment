/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, screen, waitFor } from "@testing-library/react";
import { ApiRequest } from "./ApiRequest";

describe("API Request Task:", () => {
  it("component should render collection returned from API in User component", async () => {
    render(<ApiRequest />);

    await waitFor(
      () => {
        const total = screen.getByTitle("totalUsers").textContent;
        expect(total).toEqual("Total Users: 2");
        const userIdString1 = screen.getByTitle("userId-0").textContent;
        const isCompleteString1 = screen.getByTitle("isComplete-0").textContent;
        const isActiveString1 = screen.getByTitle("isActive-0").textContent;
        expect(userIdString1).toContain("1");
        expect(isCompleteString1).toContain("true");
        expect(isActiveString1).toContain("true");
        const userIdString2 = screen.getByTitle("userId-1").textContent;
        const isCompleteString2 = screen.getByTitle("isComplete-1").textContent;
        const isActiveString2 = screen.getByTitle("isActive-1").textContent;
        expect(userIdString2).toContain("3");
        expect(isCompleteString2).toContain("false");
        expect(isActiveString2).toContain("false");
      },
      { timeout: 10000 }
    );
  });
});
