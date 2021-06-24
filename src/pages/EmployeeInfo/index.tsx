import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Link, useParams } from 'react-router-dom';

import { InfoContainer, ImgContainer, Container } from './styles';

import colabImg from "../../assets/colaboradores.png"
import { TiArrowLeftThick } from "react-icons/ti";
import { RiFileEditFill } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';

interface Employee {
    id: string;
    name: string;
    bornDate: string;
    salary: number;
    position: string;
  }

export function EmployeeInfo() {

    const [ employee, setEmployee ] = useState<Employee>({} as Employee);

    const { id }:any = useParams();

    useEffect(() => {
        api.get(`/employees/${id}`).then( ({ data }) => setEmployee(data.employees))
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
                        type="button"
                    >
                        <TiArrowLeftThick />
                        Voltar
                    </button>
                </Link>
                <button
                        type="button"
                    >
                        <FiTrash2 />
                        Excluir
                    </button>
                    <button
                        type="button"
                    >
                        <RiFileEditFill />
                        Editar
                    </button>
            </div>
        </InfoContainer>
        <ImgContainer>
            <img src={colabImg} alt="colaboradores" />
        </ImgContainer>
        </Container>
    );
}