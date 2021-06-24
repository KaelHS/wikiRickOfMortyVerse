import { createContext, ReactNode, useEffect, useState, useContext } from 'react';
import { api } from '../services/api';

interface Employee {
    id: string;
    name: string;
    bornDate: string;
    salary: number;
    position: string;
  }

type EmployeeInput = Omit<Employee, 'id' >;

interface EmployeesProviderProps {
    children: ReactNode;
}

interface EmployeeContextData {
    employees: Array<Employee>;
    createEmployee: (transaction: EmployeeInput ) => Promise<void>;
}


export const EmployeeContext = createContext<EmployeeContextData>({} as EmployeeContextData);

export function EmployeeProvider({ children }: EmployeesProviderProps ) {

    const [ employees, setEmployees ] = useState<Employee[]>([]);

    useEffect( () => {
      api.get('/employees').then( ({ data }) => setEmployees(data.employees));
    }, []);

    async function createEmployee ( employeeInput: EmployeeInput) {
        const response = await api.post('/employees', {
            ...employeeInput,
            // id: 
        } )
        
        const { employee } = response.data;

        setEmployees([
            ...employees,
            employee,
        ])
    }
  
    return(
        <EmployeeContext.Provider value={{employees, createEmployee}}>
        { children }
        </EmployeeContext.Provider>
    );
}

export function useEmployees (){
    const context = useContext(EmployeeContext)

    return context;
}