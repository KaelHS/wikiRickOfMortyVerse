import React from 'react';
import { createContext, ReactNode, useEffect, useState, useContext } from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';
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
    getEmployees: ( ) => Promise<void>

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
            bornDate:  new Intl.DateTimeFormat('pt-BR').format(new Date(employee.bornDate)),
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

             


        } catch {
            toast.error('Erro na remoção do colaborador');
        }
    }

    const editEmployee = async ( employeeId : string) => {
        try {
    
          const updateResponse = await api.put(`/employees/${employeeId}`)


        } catch {
          toast.error('Erro na edição do colaborador');
        }
      };
  
    return(
        <EmployeeContext.Provider value={{loadedEmployees, createEmployee, deleteEmployee, getEmployees }}>
        { children }
        </EmployeeContext.Provider>
    );
}

export function useEmployees (){
    const context = useContext(EmployeeContext)

    return context;
}