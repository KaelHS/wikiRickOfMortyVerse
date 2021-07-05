import React from 'react';
import { createContext, ReactNode, useEffect, useState, useContext } from 'react';
import { api } from '../services/api';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface Character { 
  id: string;
  name: string;
  image?: string;
  species: string;
  gender: string;
  isFavorite: boolean;
}

interface Page {
    next: string;
    current: string;
    prev: string;
}


interface CharacterProviderProps {
    children: ReactNode;
}

interface CharacterContextData {
    loadedCharacters: Array<Character>;
    getCharacters: ( ) => Promise<void>;
    loadedFavorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => Promise<void>;
    page: Page;
    goNextPage: ( ) => Promise<void>;
    goPrevPage: ( ) => Promise<void>;
    favoriteCharacters: Array<Character>;
    getFavorites: ( ) => Promise<void>;

}

export const CharacterContext = createContext<CharacterContextData>({} as CharacterContextData);

export function CharacterProvider({ children }: CharacterProviderProps ) {

    const initialURLFetch = 'https://rickandmortyapi.com/api/character/'

    const [ loadedCharacters, setLoadedCharacters ] = useState<Character[]>([]);
    const [ loadedFavorites, setLoadedFavorites ] = useState<string[]>([]);
    const [ favoriteCharacters, setFavoriteCharacters ] = useState<Character[]>([]);
    const [ isFavorite, setIsFavorite ] = useState<boolean>(false);

    const [ page, setPage ] = useState<Page>({
        prev: '',
        next: '',
        current: initialURLFetch,
    });

    const customAlert = withReactContent(Swal);

    async function getCharacters() {
        
            try{

                const response = await api.get(page.current);

                const UpdatedResponse = response.data.results.map( (cht: Character) => ({
                    id: cht.id,
                    name: cht.name,
                    image: cht.image,
                    species: cht.species,
                    gender: cht.gender,

                }))

                setLoadedCharacters(UpdatedResponse);

                setPage({
                    prev: response.data.info.prev,
                    next: response.data.info.next,
                    current: page.current,
                })

            } catch (err) {
                console.log(err);
            }

    }

    function addFavorite( id: string ) {

        const updatedFavorites =  loadedFavorites;

        if (updatedFavorites.includes(id)) {
            return 
        } else {
            
            updatedFavorites.push(id);
            setLoadedFavorites(updatedFavorites);
        
            customAlert.fire({
                toast: true,
                timer: 1300,
                title: "Personagem Favoritado",
                position: "top-end",
                showConfirmButton: false,
                background: "var(--green-500)",
                
            })

        }
    }

    async function removeFavorite( id: string ){

        const toRemoveFavorites = loadedFavorites ;
        const favoriteIndex = toRemoveFavorites.findIndex( character => character == id );

        if (favoriteIndex >= 0 ){
            toRemoveFavorites.splice(favoriteIndex, 1);
            setLoadedFavorites(toRemoveFavorites);

            customAlert.fire({
                toast: true,
                timer: 1300,
                title: "Favorito removido",
                position: "top-end",
                showConfirmButton: false,
                background: "var(--red-500)",
                
            });

            let queryFavorites = loadedFavorites.filter((index, item) => loadedFavorites.indexOf(index) === item).join();
        
            await api.get(`/character/${queryFavorites}`).then( ({data}) => setFavoriteCharacters(data));
    
          } else {
            throw Error();
          }

    }


    async function goNextPage(){
        const nextPageReponse = await api.get(page.next);
        
        setPage({
            current: page.next,
            next: nextPageReponse.data.info.next,
            prev: nextPageReponse.data.info.prev,
        });

        window.scrollTo(0, 0);

    }

    async function goPrevPage(){
        const prevPageReponse = await api.get(page.prev);
        
        setPage({
            current: page.prev,
            next: prevPageReponse.data.info.next,
            prev: prevPageReponse.data.info.prev,
        });

        window.scrollTo(0, 0);
        console.log(page)


    }

    async function getFavorites () {

        let queryFavorites = loadedFavorites.filter((index, item) => loadedFavorites.indexOf(index) === item).join();
        
        await api.get(`/character/${queryFavorites}`).then( ({data}) => setFavoriteCharacters(data));

    }

    useEffect( () => {
      getCharacters();
        
    }, [page.current])
  
    return(
        <CharacterContext.Provider 
            value={{
                loadedCharacters, 
                getCharacters, 
                loadedFavorites, 
                addFavorite, 
                removeFavorite,
                page,
                goNextPage,
                goPrevPage,
                favoriteCharacters, 
                getFavorites }}>
        { children }
        </CharacterContext.Provider>
    );
}

export function useCharacter(){
    const context = useContext(CharacterContext)

    return context;
}