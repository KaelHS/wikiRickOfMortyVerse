import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";


import { Container } from './styles'

import { FiTrash2, FiSearch } from 'react-icons/fi';
import { RiFileEditFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { useEmployees } from "../../hooks/useEmployees";


export function Home() {


  const { loadedEmployees, deleteEmployee, getEmployees } = useEmployees();


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
            { loadedEmployees?.map( employee => (
            <tr key={ employee.id }>
                <td>
                  <Link to={`/employees/${employee.id}`}>
                    <button>
                        <FiSearch size="1rem" color="var(--pink-500)"/>
                    </button>
                    </Link></td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.salary}</td>
                <td>{employee.bornDate}</td>
                <td>
                    <Link to="/">
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

                </td>
            </tr>
            ))}
            </tbody>
            </table>
        </Container>
    </>
  );
}