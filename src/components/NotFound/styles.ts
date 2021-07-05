import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    padding: 3rem 0;
    max-width:400px;
    background-color: var(--gray-50);
    text-align: center;
    border-radius: 0.5rem;


    p {
        font-size: 1.5rem;
        font-family: Helvetica, sans-serif;
        margin-bottom: 4rem;
        line-height: 2rem;
        color: var(--gray-850);
    }

    button {
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        border: none;
        border-radius: 0.25rem;
        background-color: var(--green-500);
        color: var(--gray-850);

        transition: filter 0.2s;

        :hover {
            filter: brightness(0.9);

        }
    }

`;