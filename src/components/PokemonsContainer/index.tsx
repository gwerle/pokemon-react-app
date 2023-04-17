import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useInView } from "react-intersection-observer";

import { fetchPokemon } from "@/service/get/fetchPokemonList";

import PokemonList from "../PokemonList";
import PokemonSearchInput from "../PokemonSearchInput";

export default function PokemonsContainer() {
  const { ref, inView } = useInView();

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(["pokemons"], fetchPokemon, {
      getNextPageParam: lastPage => lastPage.nextPage,
    });

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <section>
      <PokemonSearchInput />
      {!isLoading && <PokemonList data={data} />}

      <button
        ref={ref}
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? "Carregando..."
          : hasNextPage
          ? "Carregar mais"
          : "Isso é tudo!"}
      </button>
    </section>
  );
}
