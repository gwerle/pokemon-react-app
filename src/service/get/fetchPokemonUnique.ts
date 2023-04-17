import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

import instance from "@/configuration/axios";
import { PokemonDetailsI } from "@/types";

async function getPokemonUnique(ctx: QueryFunctionContext) {
  const [pokemonUrl] = ctx.queryKey;

  const { data } = await instance.get<PokemonDetailsI>(pokemonUrl as string);

  return data;
}

export default function usePokemon(pokemonUrl: string) {
  return useQuery([pokemonUrl], getPokemonUnique);
}
