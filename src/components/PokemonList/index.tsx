import { InfiniteData } from "@tanstack/react-query";

import { PokemonListI } from "@/types";

import PokemonCard from "../PokemonCard";
import * as S from "./styled";

type Props = {
  data:
    | InfiniteData<{
        response: PokemonListI[];
        nextPage: string;
      }>
    | undefined;
};

export default function PokemonList({ data }: Props) {
  return (
    <S.ListContainer>
      {data?.pages.map(group =>
        group.response.map(pokemon => (
          <PokemonCard key={pokemon.url} pokemon={pokemon} />
        ))
      )}
    </S.ListContainer>
  );
}
