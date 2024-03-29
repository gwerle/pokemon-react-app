import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "@/utils/tests/renderWithTheme";

import TextField from ".";

describe("<TextField />", () => {
  it("Renders with Label", () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />);

    expect(screen.getByLabelText("Label")).toBeInTheDocument();
  });

  it("Renders without Label", () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
  });

  it("Renders with placeholder", () => {
    renderWithTheme(<TextField placeholder="unit testing" />);

    expect(screen.getByPlaceholderText("unit testing")).toBeInTheDocument();
  });

  it("Changes its value when typing", async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        onInput={onInput}
      />
    );

    const input = screen.getByRole("textbox");
    const text = "This is my new text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it("Does not changes its value when disabled", async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        disabled
        label="TextField"
        labelFor="TextField"
        id="TextField"
        onInput={onInput}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();

    const text = "This is my new text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it("Renders with error", () => {
    const { container } = renderWithTheme(
      <TextField label="TextField" labelFor="TextField" error="Error message" />
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("Is not accessible by tab when disabled", () => {
    renderWithTheme(
      <TextField
        disabled
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    );

    const input = screen.getByLabelText("TextField");
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});
