import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Link, useParams } from 'react-router-dom';

import { InfoContainer, ImgContainer, Container } from './styles';

import colabImg from "../../assets/colaboradores.png"
import { TiArrowLeftThick } from "react-icons/ti";
import { RiFileEditFill } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';
import { useEmployees } from '../../hooks/useEmployees';

interface Employee {
    id: string;
    name: string;
    bornDate: string;
    salary: number;
    position: string;
  }

export function EmployeeInfo() {

    const [ employee, setEmployee ] = useState({} as any);

    const { id }:any = useParams();

    const { deleteEmployee } = useEmployees()

    useEffect(() => {

        async function getEmployee() {
            const {data} = await api.get(`/employees/${id}`);

            const dataFormatted = {
                id: data.employees.id,
                name: data.employees.name,
                bornDate:  new Intl.DateTimeFormat('pt-BR').format(new Date(data.employees.bornDate)),
                salary: new Intl.NumberFormat('pt-BR', { style:'currency', currency: 'BRL'}).format(Number(data.employees.salary)),
                position: data.employees.position
        
            }

            setEmployee(dataFormatted);

        }

        getEmployee();
        
    }, [])


    return(
        <Container>
        <InfoContainer>
            <div>
                <h1><span>Nome: </span>{employee.name}</h1>
                <p><span>Cargo: </span>{employee.position}</p>
                <p><span>Salário: </span>{employee.salary}</p>
                <p><span>Nascimento: </span>{employee.bornDate}</p>
            </div>
            <div className="buttonGroup"> 
                <Link to="/">
                <button
                        className="backButton"
                        type="button"
                    >
                        <TiArrowLeftThick />
                        Voltar
                    </button>
                </Link>
                <Link to={`/edit/${employee.id}`}>
                    <button className="editButton">
                        <RiFileEditFill size="1rem" color="var(--yellow-500)"/>
                        Editar
                    </button>
                    </Link>
                    <button
                      className="deleteButton" 
                      onClick={() => deleteEmployee(employee.id)}>
                        <FiTrash2  size="1rem" color="var(--red-500)"/>
                        Excluir
                    </button>
            </div>
        </InfoContainer>
        <ImgContainer>
            <img src={colabImg} alt="colaboradores" />
        </ImgContainer>
        </Container>
    );
}