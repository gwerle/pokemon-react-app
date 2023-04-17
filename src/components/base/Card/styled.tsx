import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    border: ${`1px solid ${theme.colors.darkRed}`};
    font-size: ${theme.font.sizes.xsmall};
    border-radius: 10px;
    box-shadow: 0 0 0.2rem ${theme.colors.lightGray};
  `}
`;
