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
            background: var(--green-500);
            color: #fff;
            border: none;
            padding: 1rem;
            font-size: 1rem;
            font-weight:bold;
            border-radius: 0.25rem;
            transition: filter 0.2s;

            :hover {
                filter: brightness(0.8);
            }
        }
    }
`;