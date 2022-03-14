import { render } from "@testing-library/react";
import { Button } from "../components/General";

test("renders button component", () => {
  render(<Button variant="default" text="Test Button" />);
});
