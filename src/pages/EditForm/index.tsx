import { useState } from 'react';
import { useParams } from 'react-router-dom';


import { FormContainer, Container, ImgContainer } from './styles';

import reunionPNG from "../../assets/reunion.png"

import { FormEvent } from 'react';
import { useEmployees } from '../../hooks/useEmployees';
import { Header } from '../../components/Header';

export function EditForm() {

    const [ ename, setEname ] = useState('');
    const [ bornDate, setBornDate ] = useState('');
    const [ esalary, setEsalary ] = useState('');
    const [ eposition, setEposition ] = useState('');

    const { loadedEmployees } = useEmployees();

    const { id }:any = useParams();

    const selectedEmployee = loadedEmployees.find( eimployee => eimployee.id === id );


    function handleSubmit (event: FormEvent) {
            event.preventDefault();
            
        //edit
    }

    return(
        <>
        <Header />
        <Container>
            
        <FormContainer onSubmit={handleSubmit}>
            

        <p>Editando o(a) colaborador(a):<br/> { selectedEmployee?.name} </p>
            <input
                required
                id="name"
                type="text"
                placeholder="Name"
                value={ename}
                onChange={ ( { target }) => setEname(target.value) } />
            <input
                required
                id="position"
                type="text"
                placeholder="Cargo"
                value={eposition}
                onChange={ ({ target }) => setEposition(target.value)} />
            <input
                required
                id="salary"
                type="text"
                placeholder="Salario"
                value={esalary}
                onChange={ ({ target }) => setEsalary(target.value)} />
            <input  
                required    
                id="bornDate"
                type="date"
                placeholder="Nascimento"
                value=""
                onChange={ ({ target })=> setBornDate(target.value)} />

            <button>Confirmar</button>

        </FormContainer>
        <ImgContainer>
            <img src={reunionPNG} alt="colaboradores" />
        </ImgContainer>
        </Container>
</>
    );
}