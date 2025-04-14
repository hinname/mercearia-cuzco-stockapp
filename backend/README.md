## About the web API
The Web API is RESTful and follows best practices for API design, making it easy to integrate with other applications and services.

The API is built using **Fastify**, a high-performance web framework for Node.js, to handle HTTP requests and routing.  
It uses **Prisma** as the ORM (Object-Relational Mapping) tool for database access, schema management, and migrations with **SQLite** as the database engine.  
For security, **bcrypt** is used to hash user passwords before storing them in the database, and **@fastify/jwt** is used to handle authentication through JSON Web Tokens (JWT), enabling secure login and protected routes.


## Getting Started

To run this web API locally, follow these steps.

### Requirements
- Windows 10+ or Linux/Mac with [**Node.js**](https://nodejs.org/en/download) version 20+ (LTS)

### Installation
1. Clone this repository:
 ```sh
    git clone https://github.com/hinname/mercearia-cuzco-stockapp.git
 ```
 2. Open the terminal in the **backend** folder and install all dependencies:
```sh
    npm install
```
3. Apply migrations and create your SQLite database:
```sh
    npx prisma migrate dev
```
4. Run the API with the following command:
```sh
    npm run dev
```
5. Enjoy the API!