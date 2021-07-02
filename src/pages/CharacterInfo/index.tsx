import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { InfoContainer, ImgContainer, Container } from './styles';

import { Header } from '../../components/Header';


interface Character { 
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    image?: string;
    origin: {
        name: string;
    }
  }

export function CharacterInfo() {

    const [ character, setCharacter ] = useState<Character>({} as Character);

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
                <h3><span>Nome: </span>{character.name}</h3>
                <p><span>Espécie: </span>{character.species}</p>
                <p><span>Sexo: </span>{character.gender}</p>
                <p><span>Status: </span>{character.status}</p>
                <p><span>Origem: </span>{character.origin?.name}</p>
            </div>
        </InfoContainer>

        </Container>
        </>
    );
}