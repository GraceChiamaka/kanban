import { Description, TaskContainer } from "./style";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { RootState } from "../../store";
import { formatDate } from "../../utils";

export const TaskDetails = () => {
  const { columns } = useSelector((state: RootState) => state.columnGroups);
  const [taskDetails, setTaskDetails] = useState({
    id: "",
    title: "",
    createdAt: "",
    description: "",
  });
  const navigate = useNavigate();

  const { id: taskId } = useParams();

  useEffect(() => {
    getTaskDetails();

    // eslint-disable-next-line
  }, [taskId, columns]);

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

  return (
    <Modal
      visible={true}
      footer={null}
      onCancel={() => navigate("/", { replace: true })}
    >
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
