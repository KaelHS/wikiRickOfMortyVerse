import { createServer, Model } from 'miragejs';

export const makeServer = ({ environment = "test" } = {}) => {
  
  let server = createServer({
    environment,

    models: {
      employees: Model,
    },
  
    seeds(server) {
      server.db.loadData({
        employees: [
          { id: "1", name: "Henrique Alves de Melo", bornDate: "2020-02-15T06:00:00Z" , salary: 2250 , position: "UX Designer"  },
          { id: 2, name: "Mariana Felici Almeida", bornDate: "2020-02-15T06:00:00Z" , salary: 1500 , position: "QA Intern"  },
          { id: 3, name: "José Augusto do Santos", bornDate: "2020-02-15T06:00:00Z" , salary: 2000 , position: "Digital Marketing Specialist"  },
          { id: 4, name: "Roberto Neves", bornDate: "2020-02-15T06:00:00Z" , salary: 1800 , position: "Cloud Support Associate"  },
          { id: 5, name: "Jorge Estevez de Sá", bornDate: "2020-02-15T06:00:00Z" , salary: 4500 , position: "Marketing Manager"  },
          { id: 6, name: "Karine Dias Souza", bornDate: "2020-02-15T06:00:00Z" , salary: 1500 , position: "Casting Intern"  },
          { id: 7, name: "Nathaly Mendes", bornDate: "2020-02-15T06:00:00Z" , salary: 2000 , position: "Frontend Developer"  },
          { id: 8, name: "Gustavo Henrique Perez", bornDate: "2020-02-15T06:00:00Z" , salary: 2250 , position: "UX Designer"  },
          { id: 9, name: "Samira Abduh", bornDate: "2020-02-15T06:00:00Z" , salary: 1800 , position: "Security Operations Associate"  },
          { id: 10, name: "Yasmin Heloisa Schultz", bornDate: "2020-02-15T06:00:00Z" , salary: 4500 , position: "Product Manager"  },
          { id: 11, name: "Percival Gomes Brait", bornDate: "2020-02-15T06:00:00Z" , salary: 2000 , position: "Backend Developer"  },
          { id: 12, name: "Mohamad Abdu Assad", bornDate: "2020-02-15T06:00:00Z" , salary: 4500 , position: "Business Development Manager"  }
        ]
      })
    },
  
      routes() {
        this.namespace = 'api';
  
        this.get("/employees", ( (schema) => {
          return schema.all("employees");
        }))
        
        this.get("/employees/:id", async(schema, request) => {
          let id = request.params.id
        
          return await schema.find('employees', id)
        })
        
        let newID = 11;

        this.post("/employees", async (schema, request) => {

          let attrs = JSON.parse(request.requestBody);
          attrs.id = newID++;
        
          return schema.create('employees', attrs)
        })
        
        this.put("/employees/:id",  async (schema, request) => {

          let newAttrs = JSON.parse(request.requestBody)
          let id = request.params.id
          let selected = await schema.find('employees', id)
        
          return selected?.update(newAttrs);

        })
        
        this.delete("/employees/:id", async (schema, request) => {
          let id = request.params.id;
          let selected = await schema.find('employees', id);
          
        
          return selected?.destroy();
        })
      }
  });
  return server;
}