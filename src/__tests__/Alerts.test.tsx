import { render } from "@testing-library/react";
import { CustomAlert } from "../components/General";

test("renders alert component", () => {
  render(<CustomAlert type="success" msg="Successful!" />);
});
