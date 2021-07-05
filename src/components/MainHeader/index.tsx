import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
import { GiEarthAmerica } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";

import { Header } from './styles';
import { useCharacter } from '../../hooks/useCharacter';

export function MainHeader() {

    const [ searchCharacter, setSearchCharacter ] = useState<string>('');

    const { page } = useCharacter();

    const history = useHistory();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchCharacter(event.target.value);
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      history.push({
        pathname: '/search',
        search: `?name=${searchCharacter}`,
      });
    };
    
    return(
        <Header>
            <div className="container">
                {/* <button
                    onClick={ page.current = ''}>
                    
                </button> */}
                <GiEarthAmerica size="2.5rem" color="var(--cyan-500)"/>
                <div>
                    <form 
                        className="searchGroup"
                        onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            value={searchCharacter}
                            onChange={handleChange}  />
                        <button
                            type="submit">
                                <FiSearch size="1rem"/>
                        </button>
                        <Link to="/favorites">
                            <MdFavorite size="2.5rem" color="var(--pynk-500)"/>
                        </Link>
                    </form>
                </div>
            </div>
        </Header>
    );
}