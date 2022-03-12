import { useState } from "react";
import { Form, Row, Col, message } from "antd";
import { CustomInput } from "../General";
import { AddCardContainer, FormContainer } from "./style";
import { tasksService } from "../../services/tasks";
import { formatErrMsg } from "../../utils";

export const CreateTask = ({ columnId, refetch }) => {
  const [showInput, setShowInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const result = await tasksService.createTask(values);
      if (result) {
        form.resetFields();
        setIsSubmitting(false);

        refetch();
      }
    } catch (error) {
      message.error(formatErrMsg(error));
    }
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
              name="name"
              rules={[{ required: true, message: "Enter a task title" }]}
            >
              <CustomInput placeholder="Enter a title for this task" />
            </Form.Item>
            <Form.Item name="description">
              <textarea placeholder="Add a more detailed description "></textarea>
            </Form.Item>
            <Row justify="space-between">
              <Col lg={19}>
                <Form.Item>
                  <button disabled={isSubmitting}>Add Task</button>
                </Form.Item>
              </Col>
              <Col lg={4}>
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
