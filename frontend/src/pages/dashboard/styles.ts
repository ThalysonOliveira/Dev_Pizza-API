import { styled } from "styled-components";

export const Container = styled.main`
    max-width: 720px;
    margin: 4rem auto;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;

    h1 {
        color: var(--white);
    }
`


export const HeaderContainer = styled.main`
    display: flex;
    flex-direction: row;

    button{
        background: transparent;
        border: 0;
        margin-left: 1rem;
    }
`

export const ListOrders = styled.article`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`

export const OrderItem = styled.section`
    display: flex;
    flex-direction: row;
    background-color: var(--dark-900);
    align-items: center;
    border-radius: 0.3rem;
    margin-bottom: 1rem;

    button {
        border: 0;
        background: transparent;
        font-size: 1.2rem;
        color: var(--white);
        height: 60px;
        align-items: center;
        display: flex;
    }
`

export const Tag = styled.div`
    width: 9px;
    background-color: var(--green-900);
    height: 60px;
    border-radius: 0.3rem 0 0 0.3rem;
    margin-right: 1rem;
`