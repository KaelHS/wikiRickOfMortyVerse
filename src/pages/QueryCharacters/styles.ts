import styled from "styled-components";

export const Container = styled.div`
    margin: 2rem auto;
    max-width: 800px;

    ul {
        list-style: none;

        a {
            color: inherit;
        }

        li {
            position: relative;
            margin-bottom: 1rem;
            padding: 1.5rem;
            border-radius: 0.5rem;
            border: 2px solid var(--gray-300);
            filter: brightness 0.2s;

            div {
                display: flex;
                align-items: center;

                img {
                    width:9rem;
                    height:9rem;
                    border-radius: 50%;
                    margin: 0 5rem 0 2rem;
                }

                span {
                    color: var(--cyan-500);
                }

                h2 {
                    line-height: 2.5rem;
                }
            }

            button {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: transparent;
                border: none;
            }

            a {
                position: absolute;              
                bottom: 4rem;
                right: 0.5rem;

                button {
                    padding: 0.5rem;
                    border: none;
                    background: var(--green-500);
                    border-radius: 0.25rem;
                    transition: filter 0.2s;

                    :hover {
                        cursor: pointer;
                        filter: brightness(0.9);
                    }

                }
            }

            :hover  {
                text-shadow: 0 0 0.8em #00acee;
                border: 2px solid #00acee;
                transition: 0.5s;
                cursor: default;
                
            }
        }
    }
`;