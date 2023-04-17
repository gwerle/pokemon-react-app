import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "@/utils/tests/renderWithTheme";

import PokemonSearchInput from ".";

describe("<PokemonList />", () => {
  it("Renders without error", () => {
    const setSearchValueFn = jest.fn();
    const { container } = renderWithTheme(
      <PokemonSearchInput
        setSearchValue={setSearchValueFn}
      ></PokemonSearchInput>
    );

    expect(container).toMatchSnapshot();
  });

  it("should call function when submit", async () => {
    const setSearchValueFn = jest.fn();
    renderWithTheme(
      <PokemonSearchInput
        setSearchValue={setSearchValueFn}
      ></PokemonSearchInput>
    );

    const input = screen.getByTestId("pokemon-search");
    const text = "This is a text{enter}";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(setSearchValueFn).toHaveBeenCalledTimes(1);
    });
  });
});
