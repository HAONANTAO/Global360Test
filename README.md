# TODO List App

一个基于 Angular 前端和 .NET 后端的简单 TODO 列表项目，支持查看、添加、编辑、删除、搜索任务。

## 技术栈

- 前端：Angular
- 后端：.NET Web API（内存存储）
- 测试：xUnit（后端）、Jasmine/Karma（前端）

## 项目结构

```
Global360Test/
├── todo-list-frontend/   # Angular 前端
└── TodoList/            # .NET 后端
```

## 环境准备

- Node.js & npm
- .NET 9 SDK

# TODO List App

A simple TODO list project based on Angular frontend and .NET backend, supporting viewing, adding, editing, deleting, and searching tasks.

## Tech Stack

- Frontend: Angular
- Backend: .NET Web API (in-memory storage)
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

## Setup & Run

### Backend

```sh
cd TodoList
# Run backend API
dotnet run
```

Default listens on http://localhost:5000 or http://localhost:5187

### Frontend

```sh
cd todo-list-frontend
npm install
# Start frontend
npm start
```

Default listens on http://localhost:4200

## Testing

### Backend Test

```sh
cd TodoList
dotnet test
```

### Frontend Test

```sh
cd todo-list-frontend
npm test
```

## Main Features

- View TODO list
- Add, edit, delete TODO
- Search TODO
- Basic unit tests

## Notes

- Backend uses in-memory storage, data will be lost after restart.
- CORS is configured, frontend and backend can connect directly by default.

## Submission Instructions

1. Clean up code, ensure no redundant files.
2. All changes are committed to the git repository.
3. All tests pass.

---

If you have any questions, please contact the author.
