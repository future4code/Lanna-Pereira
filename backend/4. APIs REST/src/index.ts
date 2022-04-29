import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

//Exercicio 1 
//a) usando GET
//b) com users ("/users") ou user("/user")

//Exercicio 2
//a) por Query params, pois é opcional passar
//b) fazendo a validação

//Exercicio 3 
//a) Query params


enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
    id: number,
    name: string,
    email: string,
    type: USER_ROLES,
    age: number
  }

  let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: USER_ROLES.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: USER_ROLES.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: USER_ROLES.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: USER_ROLES.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: USER_ROLES.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: USER_ROLES.ADMIN,
        age: 60
    }
  ]
  app.get("/users", (request: Request, response: Response) => {
    try {
      let type = request.query.type as string
      let search = request.query.search as string
  
      if (type) {
        type = type.toUpperCase()
  
        if (type in USER_ROLES) {
          const result = users.filter(user => user.type === type)
          return response.status(200).send(result)
        }
  
        throw new Error("Invalid type")
      }
  
      if (search) {
        search = search.toLowerCase()
  
        const result = users.filter(
          user => user.name.toLowerCase().includes(search)
        )
  
        console.log(result, search)
  
        if (result.length === 0) {
          return response.status(204).send("No user was found")
        }
        
        return response.status(200).send(result)
      }
  
      response.status(200).send(users)
    } catch (err: any) {
      response.status(400).send(err.message)
    response
  }
  
  app.post("/users", (request: Request, response: Response) => {
    try {
      const { name, email, age } = request.body
      let type = request.body.type as string
      
      if (!name || !email || !age || !type) {
        throw new Error("Missing data in body to create user")
      }
  
      if (typeof name !== "string") {
        throw new Error("Invalid name")
      }
  
      if (typeof email !== "string") {
        throw new Error("Invalid email")
      }
  
      if (typeof age !== "number") {
        throw new Error("Invalid age")
      }
  
      type = type.toUpperCase()
      if (!(type in USER_ROLES)) {
        throw new Error("Invalid type")
      }
  
      users.forEach(user => {
        if (user.email === email) {
          throw new Error("Email already exists")
        }
      })
  
      const newUser: User = {
        id: users.length + 1,
        name,
        email,
        age,
        type: type === USER_ROLES.NORMAL
          ? USER_ROLES.NORMAL
          : USER_ROLES.ADMIN
      }
  
      users.push(newUser)
  
      response.status(200).send({
        message: "user created successfuly",
        user: newUser
      })
    } catch (err: any) {
      response.status(400).send(err.message)
    }
  })
  
  app.put("/users/:id", (request: Request, response: Response) => {
    try {
      const id = Number(request.params.id)
  
      if (isNaN(id)) {
        throw new Error("Invalid id")
      }
  
      users.forEach(user => {
        if (user.id === id) {
          user.name += "-ALTERADO"
          return response.status(200).end()
        }
      })
      response.status(204).send("User not found")
    } catch (err: any) {
      response.status(400).send(err.message)
    }
  })
  
  app.patch("/users/:id", (request: Request, response: Response) => {
    try {
      const id = Number(request.params.id)
  
      if (isNaN(id)) {
        throw new Error("Invalid id")
      }
  
      users.forEach(user => {
        if (user.id === id) {
          user.name += "-REALTERADO"
          return response.status(200).end()
        }
      })
      response.status(204).send("User not found")
    } catch (err: any) {
      response.status(400).send(err.message)
    }
  })
  
  app.delete("/users/:id", (request: Request, response: Response) => {
    try {
      const id = Number(request.params.id)
  
      if (isNaN(id)) {
        throw new Error("Invalid id")
      }
  
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
          users.splice(i, 1)
          return response.status(200).end()
        }
      }
  
      response.status(204).send("User not found")
    } catch (err: any) {
      response.status(400).send(err.message)
    }
  })
  



const port = process.env.PORT || 3003
app.listen(port, () => {
    console.log(`Servidor esta funcionando em http://localhost:${port}`)})
})