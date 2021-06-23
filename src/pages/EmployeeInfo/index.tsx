import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';

import { InfoContainer, ImgContainer, Container } from './styles';

import colabImg from "../../assets/colaboradores.png"

interface User {
    id: string;
    name: string;
    bornDate: string;
    salary: number;
    position: string;
  }

export function EmployeeInfo() {

    const [ employee, setEmployee ] = useState<User>({} as User);

    const { id }:any = useParams();

    useEffect(() => {
        api.get(`/employees/${id}`).then( ({ data }) => setEmployee(data.employees))
    }, [])


    return(
        <Container>
        <InfoContainer>
                <h1>{employee.name}</h1>
                <p>Cargo: {employee.position}</p>
                <p>Salário: {employee.salary}</p>
                <span>{employee.bornDate}</span>
        </InfoContainer>
        <ImgContainer>
            <img src={colabImg} alt="colaboradores" />
        </ImgContainer>
        </Container>
    );
}