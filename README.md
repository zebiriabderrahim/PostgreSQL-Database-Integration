# PostgreSQL Database Integration

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![](https://img.shields.io/badge/Node.js-16.0.0-green.svg)](https://nodejs.org/en/)
[![](https://img.shields.io/badge/Angular-12.0.0-red.svg)](https://angular.io/)
[![](https://img.shields.io/badge/PostgreSQL-8.2-blue.svg)](https://www.postgresql.org/)

## Description

This is a simple client-server application built using Angular for the front-end, Node.js for the backend, and PostgreSQL as the database. The application allows users to perform basic CRUD operations (Create, Read, Update, Delete) on a PostgreSQL database.

## Requirements

Before running the application, ensure you have the following software installed:

- PostgreSQL (version ~8.2)
- Node.js (version ^16)

## Installation

1. Clone this repository to your local machine.
2. Install the required dependencies:
   - Go to the `/client` directory and run `npm install` in the terminal.
   - Go to the `/server` directory and run `npm install` in the terminal.

## Database Configuration

1. Make sure you have PostgreSQL installed and running.
2. Create a new database using the PostgreSQL client with the following command:

   ```js
   public connectionConfig: pg.ConnectionConfig = {
    user: "postgres",
    database: "TP4_Livraison",
    password: "230506",
    port: 5432,          // Attention ! Peut aussi être 5433 pour certains utilisateurs
    host: "127.0.0.1",
    keepAlive: true };
## Starting the Server

1. Go to the `/server` directory and run the following command in the terminal:
    ```bash
    Copy code
    npm start

2. The server will be active on localhost:3000 by default.

## Starting the Client

1. Go to the `/client` directory and run the following command in the terminal:
    ```bash
    Copy code
    npm start

2. The client will be active on localhost:4200 by default.

## Contributions

Contributions to this project are welcome! If you find any bugs or have suggestions for improvement, please create an issue or submit a pull request.



  

