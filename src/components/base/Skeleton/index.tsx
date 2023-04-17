import * as S from "./styled";

type Props = {
  width: string;
  height: string;
};

export default function Skeleton({ height, width }: Props) {
  return (
    <S.SkeletonContainer width={width} height={height} data-testid="skeleton" />
  );
}
