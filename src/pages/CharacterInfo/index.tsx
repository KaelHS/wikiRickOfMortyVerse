import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { InfoContainer, ImgContainer, Container } from './styles';

import { Header } from '../../components/Header';


export function CharacterInfo() {

    const [ character, setCharacter ] = useState({} as any);

    const { id }:any = useParams();

    let history = useHistory();

    useEffect(() => {

        async function getEmployee() {

            const {data} = await api.get(`/character/${id}`);

            setCharacter(data);

        }

        getEmployee();
        
    }, [])


    return(
        <>
        <Header />
        <Container>
        <ImgContainer>
            <img src={character.image} alt={character.name} />
        </ImgContainer>
        <InfoContainer>
            <div>
                <h3>{character.name}</h3>
                <p>{character.species}</p>
                <p>{character.gender}</p>
            </div>
        </InfoContainer>

        </Container>
        </>
    );
}