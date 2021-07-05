import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useHistory } from 'react-router-dom';

import { Container } from './styles'

interface NotFoundProps {
    situation: string;
}

export function NotFound( {situation}: NotFoundProps) {
    const history = useHistory();
    const customAlert = withReactContent(Swal);

    function handleNotFound() {
        
        setTimeout(() =>{
            history.push('/')
        }, 500)
    }

    return(
        <Container>
            {
                situation == "noFavorite"

                ? <p>Nenhum personagem favorito encontrado</p>
                : <p> Personagem não encontrado! </p>
            }
            <button
                type="button"
                onClick={handleNotFound}>OK</button>
        </Container>
    );
}