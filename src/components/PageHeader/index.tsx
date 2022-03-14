import { Row, Col } from "antd";
import { FC } from "react";
import { Container } from "./style";

type PageHeaderProps = {
  title: string;
  subTitle: string;
  showPageModal?: () => void;
  showButton: boolean;
};

export const PageHeader: FC<PageHeaderProps> = ({
  title,
  subTitle,
  showPageModal,
  showButton,
}) => {
  return (
    <Container>
      <Row justify="space-between">
        <Col lg={12}>
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </Col>
        <Col lg={3}>
          {showButton && (
            <button name="add-list" onClick={showPageModal}>
              Add List
            </button>
          )}
        </Col>
      </Row>
    </Container>
  );
};
