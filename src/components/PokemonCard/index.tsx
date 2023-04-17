import { memo } from "react";

import usePokemon from "@/service/get/fetchPokemonUnique";
import { PokemonListI } from "@/types";

import Card from "../base/Card";
import * as S from "./styled";

type Props = {
  pokemon: PokemonListI;
};

function PokemonCard({ pokemon }: Props) {
  const { data, isLoading, error } = usePokemon(pokemon.url);
  const pokemonTypes = data?.types.map(t => t.type.name);

  if (error) {
    return <div>Não encontramos o resultado da sua pesquisa...</div>;
  }
  return (
    <li key={pokemon.url}>
      <Card imgSrc={data?.sprites.front_default || ""} isLoading={isLoading}>
        <S.CardInfo>
          <div>
            <strong>{data?.name}</strong>
          </div>
          <div>{pokemonTypes?.join("/")}</div>
        </S.CardInfo>
      </Card>
    </li>
  );
}

export default memo(PokemonCard);
