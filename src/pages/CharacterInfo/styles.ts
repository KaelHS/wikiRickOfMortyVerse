import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3rem 6rem;

`;

export const InfoContainer = styled.div`
    h1 {
        margin-top:3rem;
        font-size: 2rem;
    }
    span {
        line-height: 3rem;
        font-size: 1.5rem;
        color: var(--cyan-500);
    }
    p {
        font-size: 1.5rem;
    }

`;

export const ImgContainer = styled.div`
    img {
        width: 250px;
        height: 350px;
        border-radius: 20%;
        border: 3px solid var(--cyan-500);
    }
`;

