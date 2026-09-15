# ASP.NET Core Product Sale - Angular

A full-stack **Product Sale Management application** built with **ASP.NET Core Web API** and **Angular**, using Entity Framework Core and SQL Server.

## 📌 Project Overview

This project demonstrates how an Angular frontend can communicate with an ASP.NET Core Web API backend to manage product-related data.

The application follows a client-server architecture:

* **Backend:** ASP.NET Core Web API
* **Frontend:** Angular
* **Database:** SQL Server
* **ORM:** Entity Framework Core

## 🚀 Features

* Product Management
* Add Products
* Display Products
* ASP.NET Core Web API
* Angular Client
* HTTP API Communication
* Entity Framework Core
* SQL Server Database
* CRUD Operations
* Image Upload
* Image Display
* JSON Data Exchange
* Swagger / OpenAPI

## 🏗️ Application Architecture

```text
                 ┌──────────────────────┐
                 │   Angular Client     │
                 │                      │
                 │  Product Components  │
                 │  Product Service     │
                 └──────────┬───────────┘
                            │
                            │ HTTP / JSON
                            ▼
                 ┌──────────────────────┐
                 │ ASP.NET Core Web API │
                 │                      │
                 │ ProductsController   │
                 │ Models               │
                 └──────────┬───────────┘
                            │
                            │ EF Core
                            ▼
                 ┌──────────────────────┐
                 │     SQL Server       │
                 │                      │
                 │      Products        │
                 └──────────────────────┘
```

## 📂 Project Structure

```text
ProductSale
│
├── product-sale-client
│   ├── src
│   │   └── app
│   │       ├── components
│   │       │   ├── add-product
│   │       │   └── display-products
│   │       │
│   │       ├── models
│   │       │   ├── product.ts
│   │       │   ├── sale.ts
│   │       │   └── upload-response.ts
│   │       │
│   │       └── services
│   │           └── product-service.ts
│   │
│   └── package.json
│
└── ProductSaleApi
    ├── ProductSaleApi
    │   ├── Controllers
    │   │   └── ProductsController.cs
    │   ├── Models
    │   │   └── Product.cs
    │   ├── Migrations
    │   ├── wwwroot
    │   │   └── images
    │   ├── Program.cs
    │   ├── appsettings.json
    │   └── ProductSaleApi.csproj
    │
    └── ProductSaleApi.sln
```

## 🛠️ Technologies Used

### Backend

* C#
* ASP.NET Core Web API
* .NET 9
* Entity Framework Core
* SQL Server
* REST API
* Swagger / OpenAPI

### Frontend

* Angular
* TypeScript
* HTML
* CSS
* Angular HTTP Client

## 🔄 API Communication

The Angular application communicates with the ASP.NET Core Web API through HTTP requests.

```text
Angular
   │
   │ HTTP GET / POST / PUT / DELETE
   ▼
ASP.NET Core Web API
   │
   ▼
Entity Framework Core
   │
   ▼
SQL Server
```

The API returns data in JSON format, which is consumed by the Angular application.

## 🖼️ Image Upload

The application also demonstrates product image upload and image display.

Uploaded images are stored under the Web API's:

```text
wwwroot/images
```

The Angular client can retrieve and display the product images through the API.

## 🗄️ Database

The backend uses **SQL Server** with **Entity Framework Core**.

Database migrations are included in the API project.

To update the database:

```bash
dotnet ef database update
```

Make sure the SQL Server connection string in `appsettings.json` is configured correctly.

## ▶️ Getting Started

### Backend Setup

Navigate to the API project:

```bash
cd ProductSale/ProductSaleApi/ProductSaleApi
```

Restore dependencies:

```bash
dotnet restore
```

Update the database:

```bash
dotnet ef database update
```

Run the API:

```bash
dotnet run
```

### Frontend Setup

Navigate to the Angular project:

```bash
cd ProductSale/product-sale-client
```

Install dependencies:

```bash
npm install
```

Run the Angular application:

```bash
ng serve
```

Then open the Angular application in your browser.

## 🎯 Learning Objectives

This project was created to practice:

* ASP.NET Core Web API development
* Angular application development
* Angular-to-API communication
* RESTful API concepts
* CRUD operations
* Entity Framework Core
* SQL Server integration
* Database migrations
* HTTP GET, POST, PUT and DELETE
* TypeScript
* Angular services
* Image upload and display
* Full-stack application architecture

## 🔹 HTTP Methods

| Method | Purpose                    |
| ------ | -------------------------- |
| GET    | Retrieve products          |
| POST   | Add a new product          |
| PUT    | Update product information |
| DELETE | Delete a product           |

## 🔐 Configuration

Before publishing the project to GitHub, check:

```text
appsettings.json
```

Do not commit real database passwords, API keys, JWT secrets, or other sensitive credentials.

For local development, use appropriate configuration or secret-management mechanisms for sensitive values.

## 📚 Project Type

**Full-Stack Web Application**

```text
Frontend  → Angular
Backend   → ASP.NET Core Web API
Database  → SQL Server
ORM       → Entity Framework Core
```











# ProductSaleClient

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
