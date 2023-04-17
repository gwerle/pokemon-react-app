import instance from "@/configuration/axios";

export const fetchPokemon = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
}) => {
  const { data } = await instance.get(pageParam);

  return { response: data.results, nextPage: data.next };
};
