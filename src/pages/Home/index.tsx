import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { api } from '../../services/api';

import { Container } from './styles'

import { FiTrash2, FiSearch } from 'react-icons/fi';
import { RiFileEditFill } from 'react-icons/ri';
import { Link } from "react-router-dom";

interface User {
  id: string;
  name: string;
  bornDate: string;
  salary: number;
  position: string;
}

export function Home() {

  const [ employees, setEmployees ] = useState<User[]>([]);

  useEffect( () => {
    api.get('/employees').then( ({ data }) => setEmployees(data.employees));
  }, []);

  console.log(employees);

  return (
    <>
        <Navbar />
        <Container>
        <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Salário</th>
                        <th>Data de Nascimento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
            { employees.map( employee => (
            <tr key={ employee.id }>
                <td><Link to={`/employees/${employee.id}`}><FiSearch /></Link></td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.salary}</td>
                <td>{employee.bornDate}</td>
                <td>
                    <Link to="">
                        <RiFileEditFill />
                        Editar
                    </Link>
                    <button>
                        <FiTrash2 />
                        Excluir
                    </button>

                </td>
            </tr>
            ))}
            </tbody>
            </table>
        </Container>
    </>
  );
}