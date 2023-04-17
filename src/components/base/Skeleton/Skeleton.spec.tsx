import { renderWithTheme } from "@/utils/tests/renderWithTheme";

import Skeleton from ".";

describe("<Skeleton />", () => {
  it("Renders without error", () => {
    const { container } = renderWithTheme(
      <Skeleton width="100px" height="100px" />
    );

    expect(container.firstChild).toHaveStyle("height: 100px");
    expect(container.firstChild).toHaveStyle("width: 100px");
    expect(container).toMatchSnapshot();
  });
});
