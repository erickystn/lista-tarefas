import styled, { css } from "styled-components"

interface ItemProps{
    done: boolean;
}

export const Item = styled.li<ItemProps>`
    display: flex;
    line-height: 7px;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;

    &:hover span {
    cursor: pointer;
    }

    ${(props) => props.done ? css`text-decoration: line-through;` : ""}
`