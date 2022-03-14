import { render, screen } from "@testing-library/react";
import { Column } from "../components";
import { Provider } from "react-redux";
import store from "../store";
import { Droppable, DragDropContext } from "react-beautiful-dnd";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
const MockColumn = ({ taskCount }) => {
  return (
    <Provider store={store}>
      <DragDropContext onDragEnd={(result) => console.log(result)}>
        <Droppable droppableId="1" key="1">
          {(provided, snapshot) => {
            return (
              <div>
                <Column
                  columnId="1"
                  columnIndex={1}
                  columnTitle="Todo"
                  tasks={[{ id: "1" }]}
                  draggingStatus={false}
                  provided={provided}
                  taskCount={taskCount}
                />
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </Provider>
  );
};
describe("Column", () => {
  it("should render column title ", async () => {
    render(<MockColumn taskCount={2} />);
    const columnTitle = await screen.getByText("Todo");
    expect(columnTitle).toBeInTheDocument();
  });
  it("should display number of tasks in column", () => {
    render(<MockColumn taskCount={2} />);
    const pElement = screen.getByText(/2 Tasks/i);
    expect(pElement).toBeInTheDocument();
  });
  it("should display task when the number of task is <=1 ", () => {
    render(<MockColumn taskCount={1} />);
    const pElement = screen.getByText(/1 Task/i);
    expect(pElement).toBeTruthy();
  });
});
