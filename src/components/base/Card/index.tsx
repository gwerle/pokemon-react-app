import Skeleton from "../Skeleton";
import * as S from "./styled";

type Props = {
  children: JSX.Element;
  imgSrc: string;
  isLoading: boolean;
};

export default function Card({ children, imgSrc, isLoading }: Props) {
  return (
    <S.CardContainer>
      {isLoading ? (
        <Skeleton height="150px" width="100%" />
      ) : (
        <img src={imgSrc} alt={"pokemon"} height="150px" />
      )}
      {children}
    </S.CardContainer>
  );
}
