## API Dog Hero

 link do postman: https://documenter.getpostman.com/view/20084732/VUjSGjZe

### O que funciona
 -> Criar um novo agendamento.
 
 -> localizar por id

-> Alterar status

<br>

### O que não funciona
-> listar todos os agendamentos.
-> calculo dos preços.
-> faltando algumas regras de negócios.
 **-> O projeto está incompleto, faltando algumas funções.**

<br>

## Tecnologias Utilizadas

* Typescript
* Node.js
* Express
* Uuid
* Dotenv
* Mysql

<br>

 ## Tabelas Criadas

 CREATE TABLE DogWalking (
    id VARCHAR(255) PRIMARY KEY,
    status VARCHAR (255) NOT NULL,
    data VARCHAR(255) NOT NULL,
    duração INT NOT NULL,
    quantidade_dogs INT NOT NULL,
    hora_início VARCHAR (255) NOT NULL,
    preço_total REAL NOT NULL
);
