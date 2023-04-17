import styled, { css } from "styled-components";

export const ListContainer = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    padding: 0;

    li {
      padding: ${theme.spacings.xsmall};
      min-width: 200px;
    }
  `}
`;
