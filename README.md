# Expense Manager API

## Description
This API was developed to manage expenses, demonstrating knowledge in NodeJS and modern RESTful API development practices.

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Express Validator
- Swagger for API documentation
- JWT for authentication

## Prerequisites
- Node.js (version 20.x or higher)
- PostgreSQL (version 16.x or higher) (I used [Neon](https://neon.tech/docs/postgres/index) to host my database)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/expense-manager-api.git
   cd expense-manager-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the project root and add the following variables:
   ```
   PGHOST=localhost
   PGUSER=your_postgres_user
   PGPASSWORD=your_postgres_password
   PGDATABASE=expense_manager_db
   PGPORT=db_port
   PGDIALECT='postgres'
   JWT_SECRET=your_jwt_secret_key
   ```

4. Set up the database:
   ```
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
   ```

## Running the Application

To start the development server:
   ```
   nodemon .\src\server.js
   ```


The API will be available at `http://localhost:3000`.

## API Documentation

Swagger API documentation is available at `http://localhost:3000/swagger-docs` when the server is running.


## Main Routes

- `GET /users`: List all users
- `GET /users/:id`: Get a specific user
- `POST /users`: Create a new user
- `POST /users/login`: User login
- `PUT /users/:id`: Update a user
- `DELETE /users/:id`: Remove a user

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Gabriel Silva - Discord: [gabrielcss](https://discordapp.com/channels/@me/gabrielcss)

Project Link: [Expense Manager-Express](https://github.com/Gabriel-CSS/ExpenseManager-Express)

