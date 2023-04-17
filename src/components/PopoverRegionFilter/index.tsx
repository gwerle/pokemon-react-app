import { useRef, useState } from "react";

import { useOutsideAlerter } from "@/utils/useOutsideAlerter";

import { useRegionFilter } from "./hooks/useRegionFilter";
import * as S from "./styled";

type Props = {
  setAreaFilter: (filter: string) => void;
};

export default function PopoverRegionFilter({ setAreaFilter }: Props) {
  const [isVisible, setVisible] = useState(false);
  const { handleSubmit, register, regions, areas, locations, reset } =
    useRegionFilter();

  const ref = useRef();
  useOutsideAlerter({ ref, setDropdown: () => setVisible(false) });

  const onSubmit = data => {
    setAreaFilter(data.area);
  };

  const handleClickReset = () => {
    reset();
    setAreaFilter("");
  };

  return (
    <div>
      <button onClick={() => setVisible(true)}>Filtrar por região</button>

      <S.PopoverContainer ref={ref as unknown as null} visible={isVisible}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.SelectStyled {...register("region")}>
            <option value="">Selecione uma região</option>
            {regions?.map(r => {
              return (
                <option key={r.url} value={r.url}>
                  {r.name}
                </option>
              );
            })}
          </S.SelectStyled>

          <S.SelectStyled {...register("location")}>
            <option value="">Selecione uma localidade</option>;
            {locations?.map(l => {
              return (
                <option key={l.url} value={l.url}>
                  {l.name}
                </option>
              );
            })}
          </S.SelectStyled>

          <S.SelectStyled {...register("area")}>
            <option value="">Selecione uma área</option>;
            {areas?.map(a => {
              return (
                <option key={a.url} value={a.url}>
                  {a.name}
                </option>
              );
            })}
          </S.SelectStyled>

          <footer>
            <button type="submit">Filtrar</button>
            <button type="reset" onClick={handleClickReset}>
              Limpar filtros
            </button>
          </footer>
        </form>
      </S.PopoverContainer>
    </div>
  );
}
