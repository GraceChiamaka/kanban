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
    <Row justify="center">
      <Col xs={24} lg={20}>
        <Container>
          <Row justify="space-between">
            <Col xs={24} lg={12}>
              <h3>{title}</h3>
              <p>{subTitle}</p>
            </Col>
            <Col xs={24} lg={3}>
              {showButton && (
                <button name="add-list" onClick={showPageModal}>
                  Add List
                </button>
              )}
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};
