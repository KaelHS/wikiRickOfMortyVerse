import { MainHeader } from "../../components/MainHeader";

import { Container } from './styles'

import { FiTrash2, FiSearch, FiStar } from 'react-icons/fi';
import { RiFileEditFill } from 'react-icons/ri';
import { useCharacter } from "../../hooks/useCharacter";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";


interface Character { 
    id: string;
    name: string;
    image?: string;
    species: string;
    gender: string;
}

export function Home() {

    const [ character, setCharacter] = useState();
    const { loadedCharacters } = useCharacter();



  console.log(loadedCharacters);
  return (
    <>
        <MainHeader />
        <Container>
            <ul>
                { loadedCharacters.map( (character) => (
                    <Link key={character.id} to={`/character/${character.id}`}>
                    <li >
                        <div>
                            <img src={character.image} alt={character.name} />
                            <section>
                                <h2><span>Nome: </span>{character.name}</h2>
                                <h2><span>Especie: </span>{character.species}</h2>
                                <h2><span>Sexo: </span>{character.gender}</h2>
                            </section>
                        </div>
                        <button>
                            <FiStar size="2rem" color="var(--yellow-500)"/>  
                        </button>
                    </li>
                    </Link>
                ))}
            </ul>
        </Container>
    </>
  );
}