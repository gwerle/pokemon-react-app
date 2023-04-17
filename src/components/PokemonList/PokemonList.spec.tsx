import { POKEMON_GROUPING_MOCK } from "@/utils/__mocks__/apiReturnMocks";
import { renderWithTheme } from "@/utils/tests/renderWithTheme";

import PokemonList from ".";

describe("<PokemonList />", () => {
  it("Renders without error", () => {
    const { container } = renderWithTheme(
      <PokemonList data={POKEMON_GROUPING_MOCK}></PokemonList>
    );

    expect(container).toMatchSnapshot();
  });
});
