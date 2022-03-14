import { FC } from "react";
import { Row, Col, Typography } from "antd";
import { CardContainer, CardHeading } from "./style";
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
  const location = window.location.href;
  const taskUrl = `${location}/${id}`;

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
          <CardHeading>
            <Row justify="space-between">
              <Col lg={16}>
                <h3>{taskTitle}</h3>
              </Col>
              <Col lg={8}>
                <Paragraph copyable={{ text: taskUrl }}>Copy Link</Paragraph>
              </Col>
            </Row>
          </CardHeading>

          <p>{description}</p>
          <span>{formatDate(dateStamp)}</span>
        </CardContainer>
      )}
    </Draggable>
  );
};
