import { render, screen, fireEvent } from "@testing-library/react";
import { CustomInput } from "../components/General";

test("renders input component", () => {
  render(<CustomInput />);
  expect(screen.getByTestId("custom-input"));
});
describe("input on change", () => {
  it("onChange", () => {
    render(
      <CustomInput
        value="test value"
        onChange={(ev) => console.log(ev.target)}
      />
    );
    const queryInput = screen.getByTestId("custom-input");
    fireEvent.change(queryInput, { target: { value: "test value" } });
    expect(queryInput.value).toBe("test value");
  });
});
