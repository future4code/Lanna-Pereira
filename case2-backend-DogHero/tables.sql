CREATE TABLE IF NOT EXISTS DogWalking (
    id VARCHAR(255) PRIMARY KEY,
    status VARCHAR (255) NOT NULL,
    data VARCHAR(255) NOT NULL,
    duração INT NOT NULL,
    quantidade_dogs INT NOT NULL,
    hora_início VARCHAR (255) NOT NULL,
    preço_total REAL NOT NULL
);