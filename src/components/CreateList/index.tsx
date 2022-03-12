import { CustomInput, Button, CustomAlert } from "../General";
import { Modal, Form, Row, Col } from "antd";
import { FC } from "react";

type FormValues = {
  title: string;
};

type CreateListProps = {
  show: boolean;
  hide: () => void;
  submit: (values: FormValues) => void;
  isSubmitting: boolean;
  status: any;
};

export const CreateList: FC<CreateListProps> = ({
  show,
  hide,
  submit,
  isSubmitting,
  status,
}) => {
  const handleSubmit = (values) => {
    submit(values);
  };
  return (
    <Modal
      title="Add New List"
      visible={show}
      onCancel={hide}
      wrapClassName="add-list-modal"
      footer={null}
      maskClosable={false}
      closable={false}
    >
      <div>
        {status && <CustomAlert type={status.type} msg={status.msg} />}
        <Form layout="vertical" requiredMark={false} onFinish={handleSubmit}>
          <Form.Item
            name="title"
            label="List Name"
            rules={[{ required: true, message: "Enter list name" }]}
          >
            <CustomInput placeholder="Enter List name" type="text" />
          </Form.Item>
          <Form.Item>
            <Row justify="end" gutter={12}>
              <Col lg={8}>
                <Button
                  text="Cancel"
                  variant="secondary"
                  onClick={hide}
                  disabled={isSubmitting}
                />
              </Col>
              <Col lg={10}>
                <Button
                  text="Create List"
                  variant="default"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                />
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
