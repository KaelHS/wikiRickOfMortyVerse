import { TiArrowLeftThick } from "react-icons/ti"
import { Link } from "react-router-dom"

import { Container } from './styles';

export const Header = () => {
    return <Container><div><Link to="/"><TiArrowLeftThick  size="2.5rem"/></Link></div></Container>
}