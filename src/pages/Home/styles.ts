import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem auto;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        th {
            color: var(--cyan-500);
            background: var(--gray-700);
            text-transform: uppercase;
            text-align: left;
            padding: 1rem 1rem;
            line-height: 1.5rem;

            &:last-child {
                text-align: center;
            }
        }
        td {
            padding: 1rem 1rem;
            border: 0;
            /* background: var(--gray-300); */
            font-weight: 400;
            color: var(--gray-300);
            border-bottom: 1px solid var(--gray-700);

            button {
                display: inline;
                margin: 0 1rem;
                padding: 0.5rem;
                border: none;
                border-radius: 0.25rem;
                transition: filter 0.2s;

                &.deleteButton {
                    border: 1px solid var(--red-500);
                    background: var(--red-500);
                }
                &.editButton {
                    border: 1px solid var(--yellow-500);
                    background: var(--yellow-500);

                }
                &.searchButton {
                    border: 1px solid var(--cyan-500);
                    background: var(--cyan-500);

                }

                p {
                    font-size: 1rem;
                    margin-left: 0.25rem;
                }

                :hover {
                    filter: brightness(0.8);
                }

            }

            &:last-child {
                display: flex;
                justify-content: center;
            }
        }

        
    }
`;