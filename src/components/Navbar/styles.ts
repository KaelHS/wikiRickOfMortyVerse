import styled from "styled-components";

export const Header = styled.header`
    margin: 0;
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--gray-300);

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button { 
            background: var(--yellow-500);
            border: none;
            padding: 1rem;
            border-radius: 0.25rem;

        }
    }
`;