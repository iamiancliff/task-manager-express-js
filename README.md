# Task Management API

A simple RESTful API built with Express.js and MongoDB for managing tasks. This API allows you to create, read, update, and delete tasks with basic task information including title, description, and completion status.

## Features

- ✅ Create new tasks
- 📋 Retrieve all tasks
- 🔍 Get specific task by ID
- ✏️ Update existing tasks
- 🗑️ Delete tasks
- 📊 MongoDB integration with Mongoose ODM
- 🚀 RESTful API design

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally on default port 27017)
- npm or pnpm package manager

## Installation

1. Clone the repository or download the project files
2. Navigate to the project directory
3. Install dependencies using your preferred package manager:

### Using npm
```bash
npm install
```

### Using pnpm
```bash
pnpm install
```

**Note**: This project includes both `package-lock.json` and `pnpm-lock.yaml` lock files, indicating that both npm and pnpm have been used during development. Both package managers will work correctly. Choose one and stick with it for consistency in your development workflow.

## Project Structure

```
project-root/
│
├── server.js           # Main server file and application entry point
├── routes.js           # API routes and endpoint handlers
├── task.js             # Mongoose model for Task schema
├── package.json        # Project metadata and dependencies
├── package-lock.json   # npm dependency lock file
├── pnpm-lock.yaml      # pnpm dependency lock file
└── README.md           # Project documentation
```

### File Descriptions

- **server.js**: Contains the Express server configuration, MongoDB connection setup, and middleware registration
- **routes.js**: Defines all API endpoints and their corresponding handlers for CRUD operations
- **task.js**: Mongoose schema definition for the Task model
- **package.json**: Contains project metadata, scripts, and dependency declarations
- **Lock files**: Ensure consistent dependency versions across different environments and installations

## Package Management

This project uses standard Node.js package management with the following key dependencies:

### Dependencies
- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling library

### Lock Files Explanation

The presence of both lock files indicates flexibility in package manager choice:

- **package-lock.json**: Generated by npm, locks exact dependency versions for npm users
- **pnpm-lock.yaml**: Generated by pnpm, provides the same functionality with pnpm's optimized storage system

**Best Practice**: Use one package manager consistently throughout the project lifecycle. If working in a team, agree on a single package manager to avoid conflicts.

## Database Schema

The Task model includes the following fields:

- **title** (String, required): The task title
- **description** (String, optional): Detailed description of the task
- **completed** (Boolean, default: false): Task completion status

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/tasks` | Create a new task |
| GET    | `/tasks` | Retrieve all tasks |
| GET    | `/tasks/:id` | Retrieve a specific task by ID |
| PUT    | `/tasks/:id` | Update a task by ID |
| DELETE | `/tasks/:id` | Delete a task by ID |

### Request/Response Examples

#### Create a Task
**POST** `/tasks`

Request Body:
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API documentation",
  "completed": false
}
```

Response (201 Created):
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API documentation",
  "completed": false,
  "__v": 0
}
```

#### Get All Tasks
**GET** `/tasks`

Response (200 OK):
```json
[
  {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API documentation",
    "completed": false,
    "__v": 0
  }
]
```

#### Get Task by ID
**GET** `/tasks/:id`

Response (200 OK):
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API documentation",
  "completed": false,
  "__v": 0
}
```

#### Update a Task
**PUT** `/tasks/:id`

Request Body:
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API documentation",
  "completed": true
}
```

Response (200 OK):
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API documentation",
  "completed": true,
  "__v": 0
}
```

#### Delete a Task
**DELETE** `/tasks/:id`

Response (200 OK):
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API documentation",
  "completed": true,
  "__v": 0
}
```

## Running the Application

1. Ensure MongoDB is running on your local machine:
   ```bash
   mongod
   ```

2. Start the Express server:
   ```bash
   node server.js
   ```

3. The server will start on `http://localhost:3000`

4. You should see the following confirmation messages:
   ```
   connected to MongoDB
   Server is running on http://localhost:3000
   ```

## Testing the API

You can test the API using various HTTP clients:

### Using cURL

Create a task:
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Test Task", "description": "This is a test task"}'
```

Get all tasks:
```bash
curl -X GET http://localhost:3000/tasks
```

### Using Postman

1. Import the API endpoints into Postman
2. Set the base URL to `http://localhost:3000`
3. Test each endpoint with appropriate request bodies and headers

### Using Thunder Client (VS Code Extension)

Thunder Client provides a lightweight alternative to Postman directly within VS Code for API testing.

## Environment Configuration

The application currently uses hardcoded configuration values:

- **MongoDB URI**: `mongodb://localhost:27017/taskdb`
- **Port**: `3000`

For production deployments, consider using environment variables for configuration management.

## Error Handling

The API implements comprehensive error handling with appropriate HTTP status codes:

- **400 Bad Request**: Invalid request data or malformed JSON
- **404 Not Found**: Resource not found (task with specified ID doesn't exist)
- **500 Internal Server Error**: Database connection issues or server errors


## Development Workflow

### Package Manager Selection

Given the presence of both lock files, developers should:

1. **For new team members**: Choose either npm or pnpm based on team preference
2. **For consistency**: Remove the unused lock file after deciding on a package manager
3. **For CI/CD**: Ensure your deployment pipeline uses the same package manager as development

### Recommended Scripts

Consider adding these scripts to your `package.json`:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

## Future Enhancements

- Implement input validation with libraries like Joi or express-validator
- Add authentication and authorization middleware
- Implement pagination for large task collections
- Add comprehensive error logging
- Include automated testing with Jest or Mocha
- Environment-based configuration management
- API documentation with Swagger/OpenAPI specification
- Database indexing for improved query performance
- Rate limiting and security middleware

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

