import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';


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
        <>
        <ul>
            <li>
            <h1>{employee.name}</h1>
            <p>Cargo: {employee.position}</p>
            <p>Salário: {employee.salary}</p>
            <span>{employee.bornDate}</span>
          </li>
      </ul>
        </>
    );
}