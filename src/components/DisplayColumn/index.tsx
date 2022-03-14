import { ColumnContainer, Heading, ColumnContent } from "./style";
import { TasksCard, CreateTask } from "../index";
import { FC } from "react";

type ColumnProps = {
  columnTitle: string;
  tasks: any[];
  columnIndex: number;
  columnId: string;
  provided?: any;
  draggingStatus: boolean;
  taskCount: number;
};

export const Column: FC<ColumnProps> = ({
  columnTitle,
  provided,
  draggingStatus,
  columnId,
  tasks,
  taskCount = 0,
}) => {
  return (
    <ColumnContainer>
      <Heading>
        <h2>{columnTitle}</h2>
        <p data-testid="column-task-count">
          {taskCount <= 1 ? `${taskCount} Task` : `${taskCount} Tasks`}{" "}
        </p>
      </Heading>

      <ColumnContent
        {...provided.droppableProps}
        ref={provided.innerRef}
        columnHeight={
          tasks?.length === 0 ? "small" : draggingStatus ? "large" : "large"
        }
      >
        {tasks.map(({ id, title, description, createdAt }, index) => (
          <TasksCard
            taskTitle={title}
            key={id}
            description={description}
            dateStamp={createdAt}
            taskIndex={index}
            id={id}
            draggingStatus={draggingStatus}
          />
        ))}
        {provided.placeholder}
      </ColumnContent>

      {columnId && <CreateTask columnId={columnId} />}
    </ColumnContainer>
  );
};
