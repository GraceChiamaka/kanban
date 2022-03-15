import { Container, ColumContainer } from "./style";
import { Column } from "../../components";
import { Row, Col, Spin, Empty, message } from "antd";
import { CustomAlert } from "../../components/General";
import { useEffect, useState } from "react";
import { Loader } from "../../components/container";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { CreateColumn } from "../../components";
import { RootState, useSelector } from "../../store";
import { PageHeader } from "../../components/PageHeader";
import { ColumnTypes } from "../../store/types/columns";
import { useDispatch } from "react-redux";
import { action } from "typesafe-actions";

export const Tasks = () => {
  const [showAddListModal, setShowAddListModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });
  const { columns } = useSelector((state: RootState) => state.columnGroups);
  const [updatedColumns, setUpdatedColumns] = useState([...columns]);
  const dispatch = useDispatch();

  useEffect(() => {
    getBoardLists();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (columns.length) {
      setIsLoading(false);
    }
  }, [columns]);

  const getBoardLists = async () => {
    setIsLoading(true);
    dispatch(
      action(ColumnTypes.REQUEST_ALL_COLUMNS_CALL, {}, onSuccess, onError)
    );
  };

  const onSuccess = (data) => {
    setIsLoading(false);
  };
  const onError = (error) => {
    setIsLoading(false);
    message.error(error);
  };

  const updateTaskColumns = (values) => {
    dispatch(
      action(
        ColumnTypes.REQUEST_UPDATE_TASK_COLUMN_CALL,
        { ...values },
        onUpdateError
      )
    );
  };

  const onUpdateError = (error) => {
    setStatus({ type: "error", msg: error });
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns.filter(
        (column) => column.id === source.droppableId
      )[0];
      const destColumn = columns.filter(
        (column) => column.id === destination.droppableId
      )[0];

      const sourceItems = [...sourceColumn.tasks];
      const destItems = [...destColumn.tasks];

      const [removed] = sourceItems.splice(source.index, 1);

      destItems.splice(destination.index, 0, removed);

      const updatedSouceColumn = { ...sourceColumn, tasks: sourceItems };
      const updatedDestColumn = { ...destColumn, tasks: destItems };

      setUpdatedColumns(
        updatedColumns.map((column) => {
          if (column.id === source.droppableId) {
            return { ...updatedSouceColumn };
          }
          if (column.id === destination.droppableId) {
            return { ...updatedDestColumn };
          }
          return column;
        })
      );
      const payload = {
        listId: source.droppableId,
        destinationId: destination.droppableId,
        taskId: draggableId,
      };
      updateTaskColumns(payload);
    }
  };

  const hideModal = () => setShowAddListModal(false);

  return (
    <Container>
      {showAddListModal && (
        <CreateColumn show={showAddListModal} hide={hideModal} />
      )}
      {status && status.type === "error" && (
        <Row>
          <Col xs={24} lg={21}>
            <CustomAlert type={status.type} msg={status.msg} />
          </Col>
        </Row>
      )}
      {isLoading ? (
        <Loader>
          <Spin spinning />
        </Loader>
      ) : (
        <>
          <PageHeader
            title="TaskBoard"
            subTitle=" Here are all the Tasks for this Project, you'll find all information
            for each"
            showButton={true}
            showPageModal={() => setShowAddListModal(true)}
          />

          {updatedColumns && updatedColumns.length === 0 ? (
            <Empty description="No Lists Created" />
          ) : (
            <ColumContainer>
              <DragDropContext
                onDragEnd={(result) => onDragEnd(result)}
                onDragStart={(result) => console.log(result, "drah start")}
              >
                {updatedColumns?.map(({ id, title, tasks }, index) => {
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
                            taskCount={tasks?.length}
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
