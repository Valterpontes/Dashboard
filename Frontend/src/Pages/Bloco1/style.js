import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem auto 6.4rem;
    grid-template-areas: 
    "brand header"
    "menu content"
    "newnote content";

`;

export const Brand = styled.div`

    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BLUE3};
    background-color: ${({ theme }) => theme.COLORS.BLUE3};

        > h1 {
            font-size: 2.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE1};
        }

`;

export const Menu = styled.ul`

    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BLUE3};
    padding-top: 6.4rem;
    text-align: center;

        > li{
            margin-bottom: 2.4rem;
        }


`;


export const Content = styled.div`

div {
  display: flex;
  flex-direction: row;
}

hr {
  border: none;
  height: 3px;
  background-color: ${({ theme }) => theme.COLORS.BLUE3};
  width: 100%;
  margin: 10px auto;
  border-radius: 5px;
  opacity: 0.8;
}

    color: ${({ theme }) => theme.COLORS.BLUE1};
    margin: 5rem;
`;

export const NewNote = styled(Link)`

    grid-area: newnote;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE1};
    display: flex;
    align-items: center;
    justify-content: center;

        > svg {
            margin-right: 0.8rem;
        }

`;
