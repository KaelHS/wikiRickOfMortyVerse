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
          { id: "1", name: "Henrique Alves de Melo", bornDate: new Date('1994-02-12 09:00:00'), salary: 2250 , position: "UX Designer"  },
          { id: 2, name: "Mariana Felici Almeida", bornDate: new Date('1994-02-12 09:00:00') , salary: 1500 , position: "QA Intern"  },
          { id: 3, name: "José Augusto do Santos", bornDate: new Date('1994-02-12 09:00:00') , salary: 2000 , position: "Digital Marketing Specialist"  },
          { id: 4, name: "Roberto Neves", bornDate: new Date('1994-02-12 09:00:00') , salary: 1800 , position: "Cloud Support Associate"  },
          { id: 5, name: "Jorge Estevez de Sá", bornDate: new Date('1994-02-12 09:00:00') , salary: 4500 , position: "Marketing Manager"  },
          { id: 6, name: "Karine Dias Souza", bornDate: new Date('1994-02-12 09:00:00') , salary: 1500 , position: "Casting Intern"  },
          { id: 7, name: "Nathaly Mendes", bornDate: new Date('1994-02-12 09:00:00') , salary: 2000 , position: "Frontend Developer"  },
          { id: 8, name: "Gustavo Henrique Perez", bornDate: new Date('1994-02-12 09:00:00') , salary: 2250 , position: "UX Designer"  },
          { id: 9, name: "Samira Abduh", bornDate: new Date('1994-02-12 09:00:00') , salary: 1800 , position: "Security Operations Associate"  },
          { id: 10, name: "Yasmin Heloisa Schultz", bornDate: new Date('1994-02-12 09:00:00') , salary: 4500 , position: "Product Manager"  },
          { id: 11, name: "Percival Gomes Brait", bornDate: new Date('1994-02-12 09:00:00') , salary: 2000 , position: "Backend Developer"  },
          { id: 12, name: "Mohamad Abdu Assad", bornDate: new Date('1994-02-12 09:00:00') , salary: 4500 , position: "Business Development Manager"  }
        ]
      })
    },
  
      routes() {
        this.namespace = 'api';
  
        this.get("/employees", ( (schema) => {
          return schema.all("employees");
        }))
        
        this.get("/employees/:id", async(schema, request) => {
          let id = String(request.params.id)
        
          return await schema.find('employees', id)
        })
        
        let newID = 12;

        this.post("/employees", async (schema, request) => {

          const attrs = JSON.parse(request.requestBody);
          attrs.id = newID++;

          attrs.bornDate = new Date(attrs.bornDate);
        
          return schema.create('employees', attrs)
        })
        
        this.put("/employees/:id",  async(schema, request) => {

          const id = request.params.id;
          const selected = await schema.find('employees', id);

          const newAttrs = JSON.parse(request.requestBody)
          console.log(newAttrs);
          return selected?.update(newAttrs);

        })
        
        this.delete("/employees/:id", async (schema, request) => {
          const id = request.params.id;
          const selected = await schema.find('employees', id);
          
        
          return selected?.destroy();
        })
      }
  });
  return server;
}