import styled, { css } from "styled-components";

type PopoverContainerProps = {
  visible: boolean;
};

export const PopoverContainer = styled.div`
  ${({ theme }) => css<PopoverContainerProps>`
    display: ${props => !props.visible && "none"};
    position: absolute;
    width: 200px;
    background: ${theme.colors.white};
    box-shadow: 0 0 0.5rem ${theme.colors.lightGray};
    border: 1px solid ${theme.colors.lightGray};
    height: fit-content;
  `}
`;

export const SelectStyled = styled.select`
  ${({ theme }) => css`
  display: block;
  width: 90%;
  height: 32px;
  padding: ${theme.spacings.xxsmall}
  margin: ${theme.spacings.xxsmall}
  `}
`;
