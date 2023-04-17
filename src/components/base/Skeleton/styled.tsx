import styled from "styled-components";

type SkeletonContainerProps = {
  height: string;
  width: string;
};

export const SkeletonContainer = styled.div<SkeletonContainerProps>`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  height: ${props => props.height};
  width: ${props => props.width};
`;
