import styled from "styled-components";

export const Container = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: space-around;

    h1 {
        font-size: 1rem;
    }

`;

export const FormContainer = styled.form`
    max-width: 500px;
    padding: 3rem;
    
    input{
        font-size:1rem;
        width: 100%;
        padding: 1rem;
        margin: 0.5rem;
    }
    button {
        font-size: 1.25rem;
        padding: 1rem;
        margin: 0.5rem;
        border: none;
        border-radius: 0.25rem;   

    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const ImgContainer = styled.div`
    padding: 2rem;
    img{
        width: 500px;
        height:500px;
    }
`;