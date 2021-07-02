import React, { useEffect, useState } from 'react';
import { FiStar } from 'react-icons/fi';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

import { Container } from './styles'


interface Character { 
    id: string;
    name: string;
    image?: string;
    species: string;
    gender: string;
}


export function QueryCharacters() {
    
    const { search } = useLocation();
    
    const name = new URLSearchParams(search).get("name")

    const [ queryCharacters, setQueryCharacters ] = useState<Character[]>([])

    useEffect(() => {
        async function getQueryCharacters(){
        
        const { data } = await api.get(`/character/?name=${name}`);

        setQueryCharacters(data.results);
        }

        getQueryCharacters();
    }, []);

    return(
        <>
        <Header />
        <Container>
        <ul>
        { queryCharacters.map( (character) => (
            <Link key={character.id} to={`/character/${character.id}`}>
            <li >
                <div>
                    <img src={character.image} alt={character.name} />
                    <section>
                        <h2><span>Nome: </span>{character.name}</h2>
                        <h2><span>Especie: </span>{character.species}</h2>
                        <h2><span>Origem: </span>{character.gender}</h2>
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