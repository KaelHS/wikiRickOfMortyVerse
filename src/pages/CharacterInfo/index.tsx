import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useCharacter } from "../../hooks/useCharacter";

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

    const { addFavorite } = useCharacter();

    const { id }:any = useParams();

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
                    <p><span>Nome: </span>{character.name}</p>
                    <p><span>Espécie: </span>{character.species}</p>
                    <p><span>Sexo: </span>{character.gender}</p>
                    <p><span>Status: </span>{character.status}</p>
                    <p><span>Origem: </span>{character.origin?.name}</p>
                </div>
                <div className="favoriteButton">
                    <button
                        onClick={() => addFavorite(character.id)}>
                        <MdFavoriteBorder size="2rem" color="var(--pink-500)"/>
                    </button>
                </div>
            </InfoContainer>
        </Container>
        </>
    );
}