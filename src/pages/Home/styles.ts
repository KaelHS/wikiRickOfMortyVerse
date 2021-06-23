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
        }
        td {
            padding: 1rem 2rem;
            border: 0;
            /* background: var(--gray-300); */
            font-weight: 400;
            color: var(--text-body);
            border-bottom: 1px solid var(--gray-700);

            button {
                margin: 0 1rem;
                background: #fff;
                padding: 0.25rem;
                border: none;
                border-radius: 0.25rem;
            }
        }

        
    }
`;