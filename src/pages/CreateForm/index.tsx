import { useState } from 'react';
import { useHistory } from "react-router-dom";


import { FormContainer, Container, ImgContainer } from './styles';

import workTeamPNG from "../../assets/workteam.png"

import { FormEvent } from 'react';
import { useEmployees } from '../../hooks/useEmployees';


export function CreateForm() {

    let history = useHistory();

    const [ name, setName ] = useState('');
    const [ bornDate, setBornDate ] = useState('');
    const [ salary, setSalary ] = useState('');
    const [ position, setPosition ] = useState('');

    const { createEmployee } = useEmployees();

    async function handleSubmit (event: FormEvent) {
            event.preventDefault();
            
            await createEmployee({
                name,
                bornDate,
                salary,
                position
            })

            await history.push('/')

    }

    return(
        <Container>
        <FormContainer onSubmit={handleSubmit}>
            <input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={ ( { target }) => setName(target.value) } />
            <input
                id="position"
                type="text"
                placeholder="Cargo"
                value={position}
                onChange={ ({ target }) => setPosition(target.value)} />
            <input
                id="salary"
                type="text"
                placeholder="Salario"
                value={salary}
                onChange={ ({ target }) => setSalary(target.value)} />
            <input  
                id="bornDate"
                type="date"
                placeholder="Nascimento"
                value={bornDate}
                onChange={ ({ target })=> setBornDate(target.value)} />
            <button
                type="submit"
            > Cadastrar</button>
        </FormContainer>
        <ImgContainer>
            <img src={workTeamPNG} alt="colaboradores" />
        </ImgContainer>
        </Container>
    );
}