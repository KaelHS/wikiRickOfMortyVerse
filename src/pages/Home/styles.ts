import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem auto;
    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        th {
            color: var(--yellow-500);
            background: var(--gray-700);
            text-transform: uppercase;
            font-weight: bold;
            text-align: left;
            padding: 1rem 2rem;
            line-height: 1.5rem;

            &:last-child {
                text-align: center;
            }
        }
        td {
            padding: 1rem 2rem;
            border: 0;
            /* background: var(--gray-300); */
            font-weight: 400;
            color: var(--gray-300);
            border-bottom: 1px solid var(--gray-700);

            button {
                display: inline;
                line-height:1.2rem;
                font-size: 1rem;
                margin: 0 1rem;
                padding: 0.5rem;
                border: none;
                border-radius: 0.25rem;
                background: transparent;
                color: var(--gray-300);

                &.deleteButton {
                    border: 1px solid var(--red-500);
                }
                &.editButton {
                    border: 1px solid var(--yellow-500);
                }

            }
            
            a {
                    text-decoration:none;
                }
        }

        
    }
`;