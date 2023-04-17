import { screen, waitFor } from "@testing-library/react";

import { renderWithTheme } from "@/utils/tests/renderWithTheme";

import PokemonCard from ".";

describe("<PokemonCard />", () => {
  it("Renders without error", () => {
    const { container } = renderWithTheme(
      <PokemonCard
        pokemon={{ name: "test", url: "https://pokeapi.co/api/v2/pokemon/1/" }}
      ></PokemonCard>
    );

    expect(container).toMatchSnapshot();
  });

  it("should show bold pokemon name", async () => {
    renderWithTheme(
      <PokemonCard
        pokemon={{ name: "test", url: "https://pokeapi.co/api/v2/pokemon/1/" }}
      ></PokemonCard>
    );

    await waitFor(() => {
      const pokemonNameEl = screen.getByText("bulbasaur");
      expect(pokemonNameEl).toBeInTheDocument();
    });
  });
});
