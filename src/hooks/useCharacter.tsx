import React from 'react';
import { createContext, ReactNode, useEffect, useState, useContext } from 'react';
import { api } from '../services/api';
import { useHistory } from 'react-router-dom';

interface Character { 
  id: string;
  name: string;
  image?: string;
  species: string;
  gender: string;
}


interface CharacterProviderProps {
    children: ReactNode;
}

interface CharacterContextData {
    loadedCharacters: Array<Character>;
    getCharacters: ( ) => Promise<void>;

}

export const CharacterContext = createContext<CharacterContextData>({} as CharacterContextData);

export function CharacterProvider({ children }: CharacterProviderProps ) {

    const [ loadedCharacters, setLoadedCharacters ] = useState<Character[]>([]);
    const [nextPage, setNextPage ] = useState<string>('');
    const [prevPage, setPrevPage ] = useState(null);

    // let history = useHistory();

    async function getCharacters() {
        
        if (!prevPage) {
            try{

                const response = await api.get('/character');
                setLoadedCharacters(response.data.results);
                setNextPage(response.data.info.next);

            } catch (err) {
                console.log(err);
            }
        } else {

            const response = await api.get(nextPage);
            setLoadedCharacters(response.data.results);
            setNextPage(response.data.info.next);
            setPrevPage(response.data.info.prev);

        }
    

    }
    useEffect( () => {
      getCharacters();
        
    }, [])
  
    return(
        <CharacterContext.Provider value={{loadedCharacters, getCharacters }}>
        { children }
        </CharacterContext.Provider>
    );
}

export function useCharacter(){
    const context = useContext(CharacterContext)

    return context;
}