import styled from "styled-components";



export const Container = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: space-around;

`;

export const FormContainer = styled.form`
    max-width: 500px;
    padding: 2rem;
    
    input{
        outline-color: var(--cyan-500);
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
        transition: filter 0.2s;

        :hover {
            filter: brightness(0.8);
        }
        
    }
`;

export const ImgContainer = styled.div`
    padding: 2rem;
    img{
        width: 500px;
        height:500px;
    }
`;