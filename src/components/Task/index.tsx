import { FC } from "react";
import { CreateTask } from "../index";
import { CardContainer } from "./style";
import { Draggable } from "react-beautiful-dnd";

type TaskProps = {
  taskTitle: string;
  description: string;
  dateStamp: string;
  draggingStatus?: boolean;
  taskIndex: number;
  id: string;
};

export const TasksCard: FC<TaskProps> = ({
  taskTitle,
  description,
  dateStamp,
  draggingStatus,
  taskIndex,
  id,
}) => {
  const formatDate = (date: string) => {
    const newDate = new Date(date).toLocaleString();
    return newDate.split(",")[0];
  };

  return (
    <Draggable key={id} draggableId={id} index={taskIndex}>
      {(provided, snapshot) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ ...provided.draggableProps.style }}
          isDragging={snapshot.isDragging}
        >
          <h3>{taskTitle}</h3>
          <p>{description}</p>
          <span>{formatDate(dateStamp)}</span>
        </CardContainer>
      )}
    </Draggable>
  );
};
