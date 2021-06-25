import { MainHeader } from "../../components/MainHeader";

import { Container } from './styles'

import { FiTrash2, FiSearch } from 'react-icons/fi';
import { RiFileEditFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { useEmployees } from "../../hooks/useEmployees";


export function Home() {

  const { loadedEmployees, deleteEmployee } = useEmployees();

  return (
    <>
        <MainHeader />
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
                    <button className="searchButton">
                        <FiSearch size="1rem" color="#fff"/>
                    </button>
                    </Link></td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.salary}</td>
                <td>{employee.bornDate}</td>
                <td>
                    <Link to={`/edit/${employee.id}`}>
                    <button 
                        className="editButton"
                    >
                        <RiFileEditFill size="1rem" color="#fff"/>
                    </button>
                    </Link>
                    <button
                      className="deleteButton" 
                      onClick={() => deleteEmployee(employee.id)}>
                        <FiTrash2  size="1rem" color="#fff"/>
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