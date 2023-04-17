import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import instance from "@/configuration/axios";
import { fetchPokemon } from "@/service/get/fetchPokemonList";

import PokemonCard from "../PokemonCard";
import PokemonList from "../PokemonList";
import { ListContainer } from "../PokemonList/styled";
import PokemonSearchInput from "../PokemonSearchInput";
import PopoverRegionFilter from "../PopoverRegionFilter";

export default function PokemonsContainer() {
  const [searchValue, setSearchValue] = useState("");
  const [valuesByRegion, setValuesByRegion] = useState<any[]>([]);
  const [areaFilter, setAreaFilter] = useState("");
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

  React.useEffect(() => {
    if (!areaFilter) {
      setValuesByRegion([]);
      return;
    }

    instance.get(areaFilter).then(response => {
      setValuesByRegion(response.data.pokemon_encounters);
    });
  }, [areaFilter]);

  return (
    <section>
      {!searchValue && <PopoverRegionFilter setAreaFilter={setAreaFilter} />}
      {!areaFilter && <PokemonSearchInput setSearchValue={setSearchValue} />}
      {valuesByRegion?.length ? (
        <ListContainer>
          {valuesByRegion.map(region => {
            return (
              <PokemonCard key={region.pokemon.url} pokemon={region.pokemon} />
            );
          })}
        </ListContainer>
      ) : searchValue?.length ? (
        <ListContainer>
          <PokemonCard
            pokemon={{
              name: searchValue,
              url: `https://pokeapi.co/api/v2/pokemon/${searchValue}`,
            }}
          />
        </ListContainer>
      ) : (
        <>
          <PokemonList data={data} />

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
        </>
      )}
    </section>
  );
}
