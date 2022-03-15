import { useState } from "react";
import { Form, Row, Col, message } from "antd";
import { CustomInput } from "../General";
import { useDispatch } from "react-redux";
import { action } from "typesafe-actions";
import { ColumnTypes } from "../../store/types/columns";
import { AddCardContainer, FormContainer } from "./style";

export const CreateTask = ({ columnId }) => {
  const [showInput, setShowInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    dispatch(
      action(
        ColumnTypes.REQUEST_CREATE_TASK_CALL,
        { ...values, columnId: columnId },
        onSuccess,
        onError
      )
    );
  };

  const onSuccess = (data) => {
    form.resetFields();
    setIsSubmitting(false);
    setShowInput(false);
  };
  const onError = (error) => {
    setIsSubmitting(false);
    message.error(error);
  };

  return (
    <AddCardContainer>
      {showInput && (
        <FormContainer>
          <Form
            layout="vertical"
            initialValues={{ description: "" }}
            onFinish={handleSubmit}
          >
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Enter a task title" }]}
            >
              <CustomInput placeholder="Enter a title for this task" />
            </Form.Item>
            <Form.Item name="description">
              <textarea placeholder="Add a more detailed description "></textarea>
            </Form.Item>
            <Row justify="space-between">
              <Col xs={16} lg={19}>
                <Form.Item>
                  <button disabled={isSubmitting}>Add Task</button>
                </Form.Item>
              </Col>
              <Col xs={6} lg={4}>
                <button
                  disabled={isSubmitting}
                  onClick={() => setShowInput(false)}
                >
                  X
                </button>
              </Col>
            </Row>
          </Form>
        </FormContainer>
      )}

      {!showInput && (
        <button onClick={() => setShowInput(true)}>+ Add Task</button>
      )}
    </AddCardContainer>
  );
};
