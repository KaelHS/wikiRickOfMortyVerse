import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { useCharacter } from '../../hooks/useCharacter';
import { api } from '../../services/api';

import { MdDeleteForever } from 'react-icons/md'
import { Container } from './styles'
import { NotFound } from '../../components/NotFound';

interface Character { 
    id: string;
    name: string;
    image?: string;
    species: string;
    gender: string;
    isFavorite: boolean;
  }

export function FavoriteList() {

    // const [ favoriteCharacters, setFavoriteCharacters ] = useState<Character[]>([]);


    const { loadedFavorites, removeFavorite, favoriteCharacters, getFavorites } = useCharacter();

    console.log(loadedFavorites.length);

    useEffect(() => {

        getFavorites();

    }, [loadedFavorites])

    console.log(loadedFavorites);

    return(
        <>
            <Header />
            <Container>
            <ul>
                { loadedFavorites.length === 0 && <NotFound situation="noFavorite"/> }
                { loadedFavorites.length == 0 

                    ? <NotFound situation="noFavorite"/>
                    : ( favoriteCharacters.map( (character) => (
                    <li key={character.id}>
                        <div>
                            <img src={character.image} alt={character.name} />
                            <section>
                                <h2><span>Nome: </span>{character.name}</h2>
                                <h2><span>Espécie: </span>{character.species}</h2>
                                <h2><span>Sexo: </span>{character.gender}</h2>
                            </section>
                        </div>
                        <button
                            onClick={ () => removeFavorite(character.id)}>
                            <MdDeleteForever size="2rem" color="var(--red-500)"/>
                        </button>
                        <Link  to={`/character/${character.id}`}>
                        <button className="detailsbutton"
                        >Detalhes</button>
                        </Link>
                        </li>
            )))}
            </ul>
            </Container>
        </>
    );
}