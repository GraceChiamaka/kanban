import { Container, ContentContainer } from "./style";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

import { PageHeader } from "../../components/PageHeader";

export const HomePage = () => {
  return (
    <>
      <Container>
        <PageHeader
          title="TaskBoard"
          subTitle=" Here are all the Tasks for this Project, you'll find all information
            for each"
          showButton={false}
        />
        <Row justify="center">
          <Col lg={12}>
            <ContentContainer>
              <h3>Get the Most out of your day</h3>
              <p>Use TaskBoard to enhance productivity and track your tasks</p>
              <Link to="/tasks">
                <button>Get Started</button>
              </Link>
            </ContentContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};
