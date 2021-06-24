import { Link } from 'react-router-dom';
import { Header } from './styles';
 
export function Navbar() {
    return(
        <Header>
            <div>
                <div>SEVEN</div>
                <p>Olá</p>
                <Link to="/create">
                    <button type="button">Adicionar Colaborador</button>
                </Link>
            </div>
        </Header>
    );
}