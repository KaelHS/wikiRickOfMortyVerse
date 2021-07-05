import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Container } from './styles'
import { NotFound } from '../../components/NotFound';
import { useCharacter } from '../../hooks/useCharacter';


interface Character { 
    id: string;
    name: string;
    image?: string;
    species: string;
    gender: string;
}


export function QueryCharacters() {

    const { addFavorite } = useCharacter();
    
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
        { queryCharacters.length > 0 
            ? (queryCharacters.map( (character) => (
                <li key={character.id}>
                    <div>
                        <img src={character.image} alt={character.name} />
                        <section>
                            <h2><span>Nome: </span>{character.name}</h2>
                            <h2><span>Especie: </span>{character.species}</h2>
                            <h2><span>Origem: </span>{character.gender}</h2>
                        </section>
                    </div>
                    <button
                        onClick={ () => addFavorite(character.id)}>
                        <MdFavorite size="2rem" color="var(--pink-500)"/>  
                    </button>
                    <Link  to={`/character/${character.id}`}>
                        <button className="detailsbutton"
                        >Detalhes</button>
                    </Link>
                </li>
            
        ))): (
            <NotFound situation="notFound"/>
        )}
    </ul>
    </Container>
    </>
    );
}