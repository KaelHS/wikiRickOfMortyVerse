import { Link } from 'react-router-dom';
import { Header } from './styles';
 
export function MainHeader() {
    return(
        <Header>
            <div>
                <div>
                    <p>Seja Bem Vindo(a)</p>
                </div>
                <Link to="/create">
                    <button type="button">Adicionar Colaborador</button>
                </Link>
            </div>
        </Header>
    );
}