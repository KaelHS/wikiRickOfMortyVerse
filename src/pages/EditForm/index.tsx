import { useState } from 'react';
import { api } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { FormContainer, Container, ImgContainer } from './styles';

import workTeamPNG from "../../assets/workteam.png"

import { FormEvent } from 'react';
import { TiArrowLeftThick } from 'react-icons/ti';

export function EditForm() {

    const [ ename, setEname ] = useState('');
    const [ bornDate, setBornDate ] = useState('');
    const [ esalary, setEsalary ] = useState('');
    const [ eposition, setEposition ] = useState('');

    const { id }:any = useParams();

    function handleSubmit (event: FormEvent) {
            event.preventDefault();
            
        //edit
    }

    return(
        <Container>
        <h1>Você está editando o colaborador: </h1>
        <FormContainer onSubmit={handleSubmit}>
            <input
                id="name"
                type="text"
                placeholder="Name"
                value={ename}
                onChange={ ( { target }) => setEname(target.value) } />
            <input
                id="position"
                type="text"
                placeholder="Cargo"
                value={eposition}
                onChange={ ({ target }) => setEposition(target.value)} />
            <input
                id="salary"
                type="text"
                placeholder="Salario"
                value={esalary}
                onChange={ ({ target }) => setEsalary(target.value)} />
            <input  
                id="bornDate"
                type="date"
                placeholder="Nascimento"
                value=""
                onChange={ ({ target })=> setBornDate(target.value)} />
            <div>
            <Link to="/">
                <button
                        className="backButton"
                        type="button"
                    >
                        <TiArrowLeftThick />
                        Voltar
                    </button>
                </Link>
                <button>Confirmar</button>
            </div>
        </FormContainer>
        <ImgContainer>
            <img src={workTeamPNG} alt="colaboradores" />
        </ImgContainer>
        </Container>
    );
}