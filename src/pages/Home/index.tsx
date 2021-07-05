import { MainHeader } from "../../components/MainHeader";

import { Container } from './styles'

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useCharacter } from "../../hooks/useCharacter";
import { Link } from "react-router-dom";


interface Character { 
    id: string;
    name: string;
    image?: string;
    species: string;
    gender: string;
    isFavorite: boolean;
}



export function Home() {

    // const [ character, setCharacter] = useState();
    // const [ isFavorite, setIsFavorite ] = useState<boolean>(false);'

    const { loadedCharacters, addFavorite, removeFavorite, loadedFavorites, goNextPage, goPrevPage, page } = useCharacter();

  return (
    <>
        <MainHeader />
        <Container>
            <ul>
                { loadedCharacters.map( (character) => (
                    <li key={character.id}>
                        <div>
                            <img src={character.image} alt={character.name} />
                            <section>
                                <h2><span>Nome: </span>{character.name}</h2>
                                <h2><span>Especie: </span>{character.species}</h2>
                                <h2><span>Sexo: </span>{character.gender}</h2>
                            </section>
                        </div>
                        {/* { character.isFavorite
                            ? ( 
                                <button onClick={() => {removeFavorite(character.id) }}>
                                    <MdFavoriteBorder size="2rem" color="var(--pink-500)"/>  
                                </button>
                            ) : (
                                <button onClick={() => {addFavorite(character.id) }}>
                                    <MdFavorite size="2rem" color="var(--pink-500)" />

                            </button>
                            )
                        } */}
                        <button onClick={() => {addFavorite(character.id) }}>

                            <MdFavorite size="2rem" color="var(--pink-500)" />

                        </button>
                        <Link  to={`/character/${character.id}`}>
                        <button className="detailsbutton"
                        >Detalhes</button>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="paginationButtonsContainer">
                    <button
                        type="submit"
                        onClick={goPrevPage}
                        disabled={ page.prev == null || !page.prev }
                        >Anterior</button>
                    <button
                        type="submit"
                        onClick={goNextPage}
                        disabled={ page.next == null || !page.next }
                        >Próxima</button>
            </div>
        </Container>
    </>
  );
}
