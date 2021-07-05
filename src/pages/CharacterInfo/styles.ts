import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem 6rem;

`;

export const ImgContainer = styled.div`
    img {
        width: 250px;
        height: 350px;
        border-radius: 20%;
        border: 3px solid var(--cyan-500);
    }
    margin-right: 3rem;
`;

export const InfoContainer = styled.div`

    p {
        font-size: 2rem;
    }

    span {
        line-height: 3.5rem;
        font-weight: bold;
        font-size: 2rem;
        color: var(--cyan-500);
    }

`;



