import { render, screen, fireEvent } from "@testing-library/react";
import { TasksCard } from "../components";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
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

const MockCard = () => {
  return (
    <Provider store={store}>
      <DragDropContext onDragEnd={(result) => console.log(result)}>
        <Droppable droppableId="1" key="1">
          {(provided, snapshot) => {
            return (
              <Draggable key="2" draggableId="2" index={1}>
                {(provided, snapshot) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TasksCard
                        taskTitle="Clear our input"
                        taskIndex={1}
                        description="follow design pattern"
                        id="2"
                        dateStamp="Feb, 12, 2022"
                        draggingStatus={false}
                      />
                    </div>
                  );
                }}
              </Draggable>
            );
          }}
        </Droppable>
      </DragDropContext>
    </Provider>
  );
};

it("should render taskdetails passed into task props", () => {
  render(<MockCard />);
  const heading = screen.getByText(/Clear our input/i);
  expect(heading).toBeInTheDocument();
});
it("should render page header component with text passed into subTitle prop", () => {
  //   render(
  //     <PageHeader
  //       title="Page Header"
  //       subTitle="Welcome"
  //       showPageModal={() => console.log("hello")}
  //     />
  //   );
  //   const paragraph = screen.getByText(/Welcome/i);
  //   expect(paragraph).toBeInTheDocument();
});
