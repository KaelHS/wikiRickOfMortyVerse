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
    
    p {
        margin-bottom: 1.5rem;
        line-height: 2rem;
        margin-left: 1rem;
        font-size: 1.25rem;
        color: var(--yellow-500);

    }
    
    input{
        outline-color: var(--yellow-500);
        font-size:1rem;
        width: 100%;
        padding: 1rem;
        margin: 0.5rem;
    }
    button {
        font-size: 1.25rem;
        padding: 0.5rem;
        width: 100%;
        height: 3rem;
        margin: 0.5rem;
        border: none;
        border-radius: 0.25rem;
        background: var(--green-500); 

    }
`;

export const ImgContainer = styled.div`
    margin: 5rem 0;
    img{
        width: 450px;
        height:450px;
    }
`;