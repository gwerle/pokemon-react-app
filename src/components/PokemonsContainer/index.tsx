import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import { fetchPokemon } from "@/service/get/fetchPokemonList";

import PokemonCard from "../PokemonCard";
import PokemonList from "../PokemonList";
import { ListContainer } from "../PokemonList/styled";
import PokemonSearchInput from "../PokemonSearchInput";

export default function PokemonsContainer() {
  const [searchValue, setSearchValue] = useState("");
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
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
      <PokemonSearchInput setSearchValue={setSearchValue} />
      {searchValue?.length ? (
        <ListContainer>
          <PokemonCard
            pokemon={{
              name: searchValue,
              url: `https://pokeapi.co/api/v2/pokemon/${searchValue}`,
            }}
          />
        </ListContainer>
      ) : (
        <PokemonList data={data} />
      )}

      {!searchValue && (
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
      )}
    </section>
  );
}
