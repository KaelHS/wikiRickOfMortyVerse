import { TiArrowLeftThick } from "react-icons/ti"
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export const Header = () => {
    const history = useHistory();
    return (
        <Container>
            <div>
                <button 
                    onClick={ () => history.goBack()}>
                        <TiArrowLeftThick  size="2.5rem"/>
                </button>
            </div>
        </Container>
    );
}