import { Link, useHistory } from 'react-router-dom';
import { Header } from './styles';

import { FiSearch } from 'react-icons/fi';
import { GiEarthAmerica } from "react-icons/gi";
import { useState } from 'react';

export function MainHeader() {

    const [ searchCharacter, setSearchCharacter ] = useState<string>('');

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
                <GiEarthAmerica size="2.5rem" color="var(--cyan-500)"/>
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
                </form>
            </div>
        </Header>
    );
}