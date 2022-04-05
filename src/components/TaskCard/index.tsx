import { FC } from "react";
import { Row, Col, Typography } from "antd";
import { CardContainer, CardHeading } from "./style";
import { useState } from "react";
import { TaskDetails } from "@src/components";
import { Draggable } from "react-beautiful-dnd";
import { formatDate } from "../../utils";
const { Paragraph } = Typography;

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
  const [showTaskDetailModal, setShowTaskDetailModal] = useState(false);
  const location = window.location.href;
  const taskUrl = `${location}/${id}`;
  const closeModal = () => {
    setShowTaskDetailModal(false);
  };

  return (
    <>
      {showTaskDetailModal && (
        <TaskDetails source="homepage" close={closeModal} taskId={id} />
      )}
      <Draggable key={id} draggableId={id} index={taskIndex}>
        {(provided, snapshot) => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{ ...provided.draggableProps.style }}
            isDragging={snapshot.isDragging}
          >
            <CardHeading>
              <Row justify="space-between">
                <Col lg={20}>
                  <h3 onClick={() => setShowTaskDetailModal(true)}>
                    {taskTitle}
                  </h3>
                </Col>
                <Col lg={3}>
                  <Paragraph copyable={{ text: taskUrl }}></Paragraph>
                </Col>
              </Row>
            </CardHeading>

            <p>{description}</p>
            <span>{formatDate(dateStamp)}</span>
          </CardContainer>
        )}
      </Draggable>
    </>
  );
};
