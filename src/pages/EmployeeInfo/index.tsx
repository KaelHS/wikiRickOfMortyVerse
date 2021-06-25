import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { InfoContainer, ImgContainer, Container } from './styles';

import colabImg from "../../assets/colaboradores.png"
import { RiFileEditFill } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';
import { useEmployees } from '../../hooks/useEmployees';
import { Header } from '../../components/Header';

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

    let history = useHistory();

    const { deleteEmployee } = useEmployees();

    const customAlert = withReactContent(Swal);

    function handleDelete () {

        deleteEmployee(employee.id);

        customAlert.fire({
            icon: 'success',
            title: 'Colaborador Excluido',
            text: '',
            showConfirmButton: false,
            timer: 1700,
            background: 'var(--gray-100)'
            })

            setTimeout(() =>{
                history.push('/')
            }, 1800)
        
    }

    useEffect(() => {

        async function getEmployee() {
            const {data} = await api.get(`/employees/${id}`);

            const dataFormatted = {
                id: data.employees.id,
                name: data.employees.name,
                bornDate:  new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(data.employees.bornDate)),
                salary: new Intl.NumberFormat('pt-BR', { style:'currency', currency: 'BRL'}).format(Number(data.employees.salary)),
                position: data.employees.position
        
            }

            setEmployee(dataFormatted);

        }

        getEmployee();
        
    }, [])


    return(
        <>
        <Header />
        <Container>
        <InfoContainer>
            <div>
                <h1><span>Nome: </span>{employee.name}</h1>
                <p><span>Cargo: </span>{employee.position}</p>
                <p><span>Salário: </span>{employee.salary}</p>
                <p><span>Nascimento: </span>{employee.bornDate}</p>
            </div>
            <div className="buttonGroup"> 
                <Link to={`/edit/${employee.id}`}>
                    <button className="editButton">
                        <RiFileEditFill size="1rem" color="#fff"/>
                        <p>Editar</p>
                    </button>
                    </Link>
                    <button
                      className="deleteButton" 
                      onClick={handleDelete}>
                        <FiTrash2  size="1rem" color="#fff"/>
                        <p>Excluir</p>
                    </button>
            </div>
        </InfoContainer>
        <ImgContainer>
            <img src={colabImg} alt="colaboradores" />
        </ImgContainer>
        </Container>
        </>
    );
}