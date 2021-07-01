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

    // let history = useHistory();

    async function getCharacters() {
        
        const response = await api.get('/character');
          
          setLoadedCharacters(response.data.results);
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