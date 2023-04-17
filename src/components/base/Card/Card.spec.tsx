import { screen } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/renderWithTheme";

import Card from ".";

describe("<Card />", () => {
  it("Renders without error", () => {
    const { container } = renderWithTheme(
      <Card imgSrc="https://google.com" isLoading={false}>
        <div data-testid="card-child">child</div>
      </Card>
    );

    expect(container).toMatchSnapshot();
  });

  it("should show loading", () => {
    renderWithTheme(
      <Card imgSrc="https://google.com" isLoading={true}>
        <div data-testid="card-child">child</div>
      </Card>
    );

    const loading = screen.getByTestId("skeleton");

    expect(loading).toBeInTheDocument();
  });

  it("should show child", () => {
    renderWithTheme(
      <Card imgSrc="https://google.com" isLoading={false}>
        <div data-testid="card-child">child</div>
      </Card>
    );

    const loading = screen.getByTestId("card-child");

    expect(loading).toBeInTheDocument();
  });
});
