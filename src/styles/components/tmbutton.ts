/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Button = styled.button`

    padding: 0.6rem;
    margin-right: 0.2rem;
    background: ${(props) => props.theme.colors.button};
    color: ${(props) => props.theme.colors.textButton};
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;

  :hover {
    background: ${(props) => props.theme.colors.buttonHover};
  }

  svg {
    stroke: ${(props) => props.theme.colors.textButton} !important;
    fill: ${(props) => props.theme.colors.textButton} !important;
  }
`
