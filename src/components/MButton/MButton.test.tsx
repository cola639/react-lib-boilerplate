import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MButton } from "./MButton";

describe("<Button />", () => {
  it("Should handle label as props", () => {
    const mockedFn = jest.fn();
    console.log("🚀 >> it >> mockedFn", mockedFn);
    render(<MButton label="click me"></MButton>);
    const button = screen.getByRole("button", { name: /click me/i });
    userEvent.click(button);
    // expect(mockedFn).toBeCalledTimes(1);
  });
});
