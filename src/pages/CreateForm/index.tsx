import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


import { FormContainer, Container, ImgContainer } from './styles';

import workTeamPNG from "../../assets/workteam.png"

import { FormEvent } from 'react';
import { useEmployees } from '../../hooks/useEmployees';
import { Header } from '../../components/Header';


export function CreateForm() {

    let history = useHistory();
    const customAlert = withReactContent(Swal);


    const [ name, setName ] = useState('');
    const [ bornDate, setBornDate ] = useState('' as any);
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

            customAlert.fire({
                icon: 'success',
                title: 'Colaborador Adicionado',
                text: 'Seja sempre receptivo',
                showConfirmButton: false,
                timer: 1700,
                background: 'var(--gray-100)'
                })
                setTimeout(() =>{
                    history.push('/')
                }, 1800)
    }

    return(
        <>
        <Header />
        <Container>
        <FormContainer onSubmit={handleSubmit}>
            <input
                required
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={ ( { target }) => setName(target.value) } />
            <input
                required
                id="position"
                type="text"
                placeholder="Cargo"
                value={position}
                onChange={ ({ target }) => setPosition(target.value)} />
            <input
                required
                id="salary"
                type="text"
                placeholder="Salario"
                value={salary}
                onChange={ ({ target }) => setSalary(target.value)} />
            <input  
                required
                id="bornDate"
                type="date"
                placeholder="Nascimento"
                value={bornDate}
                onChange={ ({ target })=> setBornDate((target.value))} />
            <button
                type="submit"
            > Cadastrar</button>
        </FormContainer>
        <ImgContainer>
            <img src={workTeamPNG} alt="colaboradores" />
        </ImgContainer>
        </Container>
        </>
    );
}