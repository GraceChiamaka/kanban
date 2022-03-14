import { render, screen } from "@testing-library/react";
import { CreateColumn } from "../components";
import { Provider } from "react-redux";
import store from "../store";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
const MockColumn = () => {
  return (
    <Provider store={store}>
      <CreateColumn show={true} hide={() => console.log("created")} />
    </Provider>
  );
};
describe("Create Column Functionality", () => {
  beforeEach(() => render(<MockColumn />));
  it("should render button element", () => {
    const addButton = screen.getByText("Create List");
    expect(addButton).toBeInTheDocument();
  });

  it("should render input component", () => {
    const input = screen.getByPlaceholderText(/Enter List name/i);
    expect(input).toBeInTheDocument();
  });
});
