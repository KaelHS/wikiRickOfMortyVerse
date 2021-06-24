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
    }
`;

export const ImgContainer = styled.div`
    img {
        width: 350px;
        height: 450px;
    }
`;

