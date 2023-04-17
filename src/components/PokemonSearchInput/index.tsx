import React, { useState } from "react";

import TextInput from "../base/TextInput";

type Props = {
  setSearchValue: (value: string) => void;
};

export default function PokemonSearchInput({ setSearchValue }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setSearchValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Pesquise o nome do seu Pokémon favorito:"
        value={value}
        buttonType="submit"
        onInput={setValue}
      />
    </form>
  );
}
