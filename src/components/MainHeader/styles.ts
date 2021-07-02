import styled from "styled-components";

export const Header = styled.header`
    margin-bottom: 1rem;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--gray-300);
    background: var(--gray-900);

    .container {
        padding: 0 1rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        max-width: 800px;

        button { 
            background: var(--green-500);
            color: #fff;
            border: none;
            padding: 0.5rem;
            border-radius: 0.25rem;
            transition: filter 0.2s;
            margin-left: 0.5rem;

            :hover {
                filter: brightness(0.8);
            }
        }

        input {
            padding: 0.5rem;
            border-radius: 0.25rem;
            border: none;

        }

        .welcome {
            p{
                font-family: 'Sacramento', cursive;
                font-size: 2.5rem;
                color: var(--cyan-500);
            }
        }
    }


`;