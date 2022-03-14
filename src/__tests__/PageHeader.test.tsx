import { render, screen, fireEvent } from "@testing-library/react";
import { PageHeader } from "../components";
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

it("should render page header component with text passed into title prop", () => {
  render(
    <PageHeader
      title="Page Header"
      subTitle="Welcome"
      showButton={false}
      showPageModal={() => console.log("hello")}
    />
  );
  const heading = screen.getByText(/Page Header/i);
  expect(heading).toBeInTheDocument();
});
it("should render page header component with text passed into subTitle prop", () => {
  render(
    <PageHeader
      title="Page Header"
      showButton={false}
      subTitle="Welcome"
      showPageModal={() => console.log("hello")}
    />
  );
  const paragraph = screen.getByText(/Welcome/i);
  expect(paragraph).toBeInTheDocument();
});
