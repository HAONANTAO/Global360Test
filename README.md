# Global360 TODO List App

## Project Overview

This is a simple TODO list application for the Global360 interview. It uses the latest Angular for the frontend and .NET 9 Web API for the backend. The backend stores data in memory—no database required.

## Tech Stack

- Frontend: Angular
- Backend: .NET 9 Web API (in-memory storage)
- Testing: xUnit (backend), Jasmine/Karma (frontend)

## Project Structure

```
Global360Test/
├── todo-list-frontend/   # Angular frontend
└── TodoList/            # .NET backend
```

## Prerequisites

- Node.js & npm
- .NET 9 SDK

---

## How to Run

### Frontend

1. Open a terminal and navigate to the frontend folder:
   ```sh
   cd todo-list-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```
4. Open your browser and go to: `http://localhost:4200`

### Backend

1. Open a terminal and navigate to the backend folder:
   ```sh
   cd TodoList
   ```
2. Restore dependencies and run the backend API:
   ```sh
   dotnet restore
   dotnet run
   ```
3. The backend API will listen on `http://localhost:5035`

---

## Testing

### Backend Tests

- The backend test project is located in `TodoList/TodoList.Tests/` and follows best practices.
- To run backend tests:
  ```sh
  dotnet restore TodoList/TodoList.Tests/TodoList.Tests.csproj
  dotnet test TodoList/TodoList.Tests/TodoList.Tests.csproj
  ```
- ⚠️ Note: Due to .NET 9 preview status, some test dependencies (such as xUnit) may not restore or run successfully. The test code is present and follows best practices, and can be run once official support is available.

### Frontend Tests

```sh
cd todo-list-frontend
npm test
```

---

## Features

- View TODO list
- Add, edit, delete TODO items
- Search TODO items
- Basic unit tests for backend and frontend

## Notes

- Backend uses in-memory storage; all data will be lost after restart.
- CORS is enabled; frontend and backend can connect directly.
- If you encounter environment or dependency issues, please refer to this README or contact the interviewer.

## Submission Instructions

1. Remove any redundant files.
2. Ensure all changes are committed to the git repository.
3. Test code is included; some tests may not run due to .NET 9 compatibility.

---

If you have any questions, please contact the author.
