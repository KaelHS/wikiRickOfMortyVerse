import { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { FormContainer, Container, ImgContainer } from './styles';

import workTeamPNG from "../../assets/workteam.png"

import { FormEvent } from 'react';

interface Employee {
    id: string;
    name: string;
    bornDate: string;
    salary: number;
    position: string;
  }

export function CreateForm() {

    const [ employee, setEmployee ] = useState<Employee>({} as Employee);
    const [ ename, setEname ] = useState('');
    const [ ebornDate, setEbornDate ] = useState('');
    const [ esalary, setEsalary ] = useState('');
    const [ eposition, setEposition ] = useState('');

    const { id }:any = useParams();

    useEffect(() => {
        api.get(`/employees/${id}`).then( ({ data }) => setEmployee(data.employees))
    }, [])


    function handleSubmit (event: FormEvent) {
            event.preventDefault();
            
            axios({
                method: 'post',
                url: '/api/contacts',
                data: {
                    ename: ename,
                    ebornDate: ebornDate,
                    esalary: esalary,
                    eposition: eposition

                }
            });
    }

    return(
        <Container>
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
                onChange={ ({ target })=> setEbornDate(target.value)} />
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