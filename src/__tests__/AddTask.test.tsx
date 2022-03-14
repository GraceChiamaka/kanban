import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreateTask } from "../components";
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

const MockCreateTask = () => {
  return (
    <Provider store={store}>
      <CreateTask columnId="1" />
    </Provider>
  );
};
describe("Create Task Functionality", () => {
  beforeEach(() => render(<MockCreateTask />));
  it("should render button element", () => {
    const addButton = screen.getByRole("button", { name: "+ Add Task" });
    expect(addButton).toBeInTheDocument();
  });

  it("should not render input component", () => {
    const input = screen.queryByPlaceholderText(/Enter a title for this task/i);
    expect(input).not.toBeInTheDocument();
  });
  it("should render input component when button is clicked", async () => {
    userEvent.click(screen.getByRole("button", { name: "+ Add Task" }));
    await waitFor(() =>
      expect(
        screen.getAllByPlaceholderText(/Enter a title for this task/i)[0]
      ).toBeInTheDocument()
    );
  });
});
