import { ColumnContainer, Heading, ColumnContent } from "./style";
import { TasksCard, CreateTask } from "../index";
import { FC, useState, useEffect } from "react";
import { tasksService } from "../../services/tasks";
import { message } from "antd";
import { formatErrMsg } from "../../utils";

type ColumnProps = {
  columnTitle: string;
  tasks: any[];
  columnIndex: number;
  columnId: string;
  provided?: any;
  draggingStatus: boolean;
};

export const Column: FC<ColumnProps> = ({
  columnTitle,
  provided,
  draggingStatus,
  columnId,
  tasks,
}) => {
  // const [taskData, setTaskData] = useState([...tasks]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const result = await tasksService.getAllTasks({ listId: columnId });
      if (result) {
        // console.log(result.data);
      }
    } catch (error) {}
  };

  const refetchList = async (payload) => {
    try {
      const result = await tasksService.getAllTasks(payload);
      if (result) {
        // setTaskData([...result.data]);
      }
    } catch (error) {
      message.error(formatErrMsg(error));
    }
  };

  const refetchTasks = () => {
    refetchList({ listId: columnId });
  };
  // console.log(tasks, "===", taskData, "updated");

  return (
    <ColumnContainer>
      <Heading>
        <h2>{columnTitle}</h2>
        <p>{tasks.length} Tasks</p>
      </Heading>

      <ColumnContent
        {...provided.droppableProps}
        ref={provided.innerRef}
        columnHeight={
          tasks.length === 0 ? "small" : draggingStatus ? "large" : "large"
        }
      >
        {tasks.map(({ id, name, description, createdAt }, index) => (
          <TasksCard
            taskTitle={name}
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

      {columnId && <CreateTask columnId={columnId} refetch={refetchTasks} />}
    </ColumnContainer>
  );
};
