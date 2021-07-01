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
            <div>
                <div className="welcome">
                    <GiEarthAmerica />
                </div>
                <div>
                    <input 
                        type="text"
                        value={searchCharacter}
                        onChange={handleChange}  />
                    <button
                        type="button">
                            <FiSearch size="1rem"/>
                    </button>
                </div>
            </div>
        </Header>
    );
}