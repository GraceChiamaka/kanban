import { CustomInput, Button, CustomAlert } from "../General";
import { Modal, Form, Row, Col, message } from "antd";
import { useDispatch } from "react-redux";
import { action } from "typesafe-actions";
import { ColumnTypes } from "../../store/types/columns";
import { FC, useState } from "react";

type CreateListProps = {
  show: boolean;
  hide: () => void;
};

export const CreateColumn: FC<CreateListProps> = ({ show, hide }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    setIsSubmitting(true);
    dispatch(
      action(
        ColumnTypes.REQUEST_CREATE_COLUMN_CALL,
        { ...values },
        onSuccess,
        onError
      )
    );
  };

  const onSuccess = (data) => {
    setIsSubmitting(false);
    form.resetFields();
    hide();
  };
  const onError = (error) => {
    setIsSubmitting(false);
    setStatus({ type: "error", msg: error });
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
        {status && status.type === "error" && (
          <CustomAlert type={status.type} msg={status.msg} />
        )}
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
