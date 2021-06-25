import React from 'react';
import { createContext, ReactNode, useEffect, useState, useContext } from 'react';
import { api } from '../services/api';
import { useHistory } from 'react-router-dom';

interface Employee {
    id: string;
    name: string;
    bornDate: string;
    salary: string;
    position: string;
  }


type EmployeeInput = Omit<Employee, 'id' >;

interface EmployeesProviderProps {
    children: ReactNode;
}

interface EmployeeContextData {
    loadedEmployees: Array<Employee>;
    createEmployee: (employee: EmployeeInput ) => Promise<void>;
    deleteEmployee: (employeeId: string) => Promise<void>;
    getEmployees: ( ) => Promise<void>;
    editEmployee: (employee: Employee) => Promise<void>;

}



export const EmployeeContext = createContext<EmployeeContextData>({} as EmployeeContextData);

export function EmployeeProvider({ children }: EmployeesProviderProps ) {

    const [ loadedEmployees, setLoadedEmployees ] = useState<Employee[]>([]);

    let history = useHistory();

    useEffect( () => {
        getEmployees();
        
    }, [])

    async function getEmployees() {

        const response = await api.get('/employees', { 
            params: {
                _sort: 'id',
                _order: 'desc',
              }
            },
        );
           
           const dataResponse = response.data.employees.map( (employee: Employee) => ({
            id: employee.id,
            name: employee.name,
            bornDate:  new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(employee.bornDate)),
            salary: new Intl.NumberFormat('pt-BR', { style:'currency', currency: 'BRL'}).format(Number(employee.salary)),
            position: employee.position
    
          }))

          setLoadedEmployees(dataResponse);

        };

    async function createEmployee ( employeeInput: EmployeeInput) {
        await api.post('/employees', {
            ...employeeInput,
        } )


        getEmployees();
    }

      async function deleteEmployee (employeeId: string) {

        try {

             await api.delete(`/employees/${employeeId}`);

             await getEmployees();

        } catch (err) {
          console.log(err)
        }
    }

    const editEmployee = async ( employee: Employee) => {
        try {
    
          await api.put(`/employees/${employee.id}`, {
            name: employee.name,
            position: employee.position,
            salary: employee.salary,
            bornDate: employee.bornDate,

          });
          console.log("enviado")
          getEmployees();


        } catch ( err ) {
          console.log(err)
        }
      };
  
    return(
        <EmployeeContext.Provider value={{loadedEmployees, createEmployee, deleteEmployee, getEmployees, editEmployee }}>
        { children }
        </EmployeeContext.Provider>
    );
}

export function useEmployees (){
    const context = useContext(EmployeeContext)

    return context;
}