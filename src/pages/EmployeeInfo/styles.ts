import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3rem 6rem;



`;

export const InfoContainer = styled.div`
    h1 {
        margin-top:3rem;
    }
    span {
        line-height: 3rem;
        font-size: 1.5rem;
        color: var(--pink-500);
    }
    p {
        font-size: 1.5rem;
    }

    .buttonGroup {
        display: flex;
        margin: 2rem 0;
        justify-content: space-around;

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

                :hover {
                    background: var(--gray-800) ;
                }

                &.deleteButton {
                    border: 1px solid var(--red-500);
                }
                &.editButton {
                    border: 1px solid var(--yellow-500);
                }
                &.backButton {
                    border: 1px solid var(--green-500);
                }
                
        }
    }
`;

export const ImgContainer = styled.div`
    img {
        width: 350px;
        height: 450px;
    }
`;

