import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


import { FormContainer, Container, ImgContainer } from './styles';

import reunionPNG from "../../assets/reunion.png"

import { FormEvent } from 'react';
import { useEmployees } from '../../hooks/useEmployees';
import { Header } from '../../components/Header';

export function EditForm() {

    const [ name, setEname ] = useState('');
    const [ bornDate, setBornDate ] = useState('');
    const [ salary, setEsalary ] = useState('');
    const [ position, setEposition ] = useState('');

    const { loadedEmployees, editEmployee } = useEmployees();

    const { id }:any = useParams();

    let history = useHistory();
    const customAlert = withReactContent(Swal);

    const selectedEmployee = loadedEmployees.find( eimployee => eimployee.id === id );


    async function handleSubmit (event: FormEvent) {
        event.preventDefault();
        
        await editEmployee({
            id,
            name,
            bornDate,
            salary,
            position
        })

        customAlert.fire({
            icon: 'success',
            title: 'Colaborador alterado com sucesso',
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
            

        <p>Editando o(a) colaborador(a):<br/> { selectedEmployee?.name} </p>
            <input
                required
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={ ( { target }) => setEname(target.value) } />
            <input
                required
                id="position"
                type="text"
                placeholder="Cargo"
                value={position}
                onChange={ ({ target }) => setEposition(target.value)} />
            <input
                required
                id="salary"
                type="text"
                placeholder="Salario"
                value={salary}
                onChange={ ({ target }) => setEsalary(target.value)} />
            <input  
                required    
                id="bornDate"
                type="date"
                placeholder="Nascimento"
                value={bornDate}
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