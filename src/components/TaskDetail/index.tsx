import { Description, TaskContainer } from "./style";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { useState, useEffect, FC } from "react";
import { RootState } from "../../store";
import { useRouter } from "next/router";
import { formatDate } from "@src/utils";
import { useDispatch } from "react-redux";
import { action } from "typesafe-actions";
import { ColumnTypes } from "@src/store/types/columns";

type DetailProps = {
  taskId: string;
  source: "homepage" | "view";
  close?: () => void;
};

export const TaskDetails: FC<DetailProps> = ({ taskId, source, close }) => {
  const { columns } = useSelector((state: RootState) => state.columnGroups);
  const router = useRouter();
  const [taskDetails, setTaskDetails] = useState({
    id: "",
    title: "",
    createdAt: "",
    description: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    getTaskDetails();

    // eslint-disable-next-line
  }, [taskId, columns]);
  useEffect(() => {
    getColumns();
  }, []);

  const getTaskDetails = () => {
    const results = columns.filter((column) => {
      return column.tasks.filter((task) => {
        if (task.id === taskId) {
          setTaskDetails({ ...task });
        }
        return task;
      });
    });

    return results;
  };

  const getColumns = () => {
    dispatch(action(ColumnTypes.REQUEST_ALL_COLUMNS_CALL, {}));
  };

  const closeModal = () => {
    if (source === "homepage") {
      close();
    } else {
      router.push("/tasks");
    }
  };
  return (
    <Modal visible={true} footer={null} onCancel={closeModal}>
      <TaskContainer>
        <h1>Task Details</h1>
        <h3>{taskDetails.title}</h3>
        <Description>
          <p>
            {taskDetails.description === ""
              ? "No Description"
              : taskDetails.description}
          </p>
        </Description>
        <p>
          Created At: <em>{formatDate(taskDetails.createdAt)}</em>
        </p>
      </TaskContainer>
    </Modal>
  );
};
