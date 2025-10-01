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

## 搭建与运行

### 后端

```sh
cd TodoList
# 运行后端 API
dotnet run
```

默认监听 http://localhost:5000 或 http://localhost:5187

### 前端

```sh
cd todo-list-frontend
npm install
# 启动前端
npm start
```

默认监听 http://localhost:4200

## 测试方法

### 后端测试

```sh
cd TodoList
dotnet test
```

### 前端测试

```sh
cd todo-list-frontend
npm test
```

## 主要功能

- 查看 TODO 列表
- 添加、编辑、删除 TODO
- 搜索 TODO
- 基础单元测试

## 说明

- 后端为内存存储，重启后数据会丢失。
- 前后端已做 CORS 配置，默认可直接联通。

## 提交说明

1. 整理代码，确保无冗余文件。
2. 所有更改已提交到 git 仓库。
3. 测试全部通过。

---

如有问题请联系作者。
