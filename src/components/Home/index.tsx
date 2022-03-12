import { Container, Heading, ColumContainer } from "./style";
import { Column } from "../index";
import { Row, Col, Spin, Empty, message } from "antd";
import { CustomAlert } from "../General";
import { useEffect, useState } from "react";
import { Loader } from "../container";
import { listService } from "../../services/lists";
import { tasksService } from "../../services/tasks";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { CreateList } from "../CreateList";
import { formatErrMsg } from "../../utils";

type ListProps = {
  id: string;
  title: string;
  tasks: any[];
};

export const HomePage = () => {
  const [showAddListModal, setShowAddListModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [listsData, setListsData] = useState<ListProps[] | []>([]);

  useEffect(() => {
    getBoardLists();
  }, []);

  const getBoardLists = async () => {
    setIsLoading(true);
    try {
      const result = await listService.getAllLists();
      setIsLoading(false);
      setListsData([...result.data]);
    } catch (error) {
      setIsLoading(false);
    }
  };

  console.log(listsData);

  const handleCreateList = async (values) => {
    setIsSubmitting(true);
    try {
      const results = await listService.createList(values);
      if (results) {
        getBoardLists();
      }
    } catch (error) {
      setIsSubmitting(false);
      message.error(formatErrMsg(error));
    }
  };
  const updateLists = async (values) => {
    try {
      const results = await tasksService.updateTaskContainer(values);
      if (results) {
        getBoardLists();
      }
    } catch (error) {
      message.error(formatErrMsg(error));
    }
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    console.log(source, destination, "result", result);

    if (source.droppableId !== destination.droppableId) {
      const payload = {
        listId: source.droppableId,
        destinationId: destination.droppableId,
        taskId: draggableId,
      };
      updateLists(payload);
    } else {
      const column = listsData[source.droppableId];
      const copiedItems = [...column.tasks];
      const [removedItems] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removedItems);
      const update = {
        ...column,
        tasks: copiedItems,
      };
    }
  };

  const hideModal = () => setShowAddListModal(false);

  return (
    <Container>
      {showAddListModal && (
        <CreateList
          show={showAddListModal}
          hide={hideModal}
          submit={handleCreateList}
          isSubmitting={isSubmitting}
          status={status}
        />
      )}
      <Row>
        <Col lg={21}>
          {status && status.type == "error" && (
            <CustomAlert type={status.type} msg={status.msg} />
          )}
        </Col>
      </Row>
      {isLoading ? (
        <Loader>
          <Spin spinning />
        </Loader>
      ) : (
        <>
          <Heading>
            <div>
              <h3>TaskBoard</h3>
              <p>
                Here are all the Tasks for this Project, you'll find all
                information for each
              </p>
            </div>
            <div>{JSON.stringify(listsData)}</div>
            <button onClick={() => setShowAddListModal(true)}>Add List</button>
          </Heading>

          {listsData && listsData.length === 0 ? (
            <Empty description="No Lists Created" />
          ) : (
            <ColumContainer>
              <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
                {listsData.map(({ id, title, tasks }, index) => {
                  return (
                    <Droppable droppableId={id} key={id}>
                      {(provided, snapshot) => {
                        return (
                          <Column
                            key={id}
                            columnTitle={title}
                            tasks={tasks}
                            columnIndex={index}
                            columnId={id}
                            provided={provided}
                            draggingStatus={snapshot.isDraggingOver}
                          />
                        );
                      }}
                    </Droppable>
                  );
                })}
              </DragDropContext>
            </ColumContainer>
          )}
        </>
      )}
    </Container>
  );
};
