# Credentials Authentication Application

This is a full-stack web application that demonstrates a credentials-based authentication system. Users can register, log in, and view a protected homepage once authenticated.

## Technologies used

The application is built using the following technologies:

- **Frontend**: Angular 17
- **Backend**: .NET 8 Core
- **Authentication**: JWT
- **ORM**: Entity Framework Core
- **Database**: PostgreSQL
- **IDE**: Visual Studio

## Features

- User registration with email, username, and password
- User login with email and password
- Secure password hashing and storage
- JWT-based authentication for protected routes
- Responsive and good looking UI using Bootstrap

## Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [.NET SDK](https://dotnet.microsoft.com/download) (8.0)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

### Installation

1. Create a PostgreSQL database:
```sql
CREATE DATABASE CredsAuthDb;
```

2. Update the connection string in `appsettings.json` (dotnet-angular-credentials-auth.Server/):
```json
{
  "ConnectionStrings": {
    "DatabaseConnection": "Host=localhost;Port=5432;Database=CredsAuthDb;Username=postgres;Password=root"
  }
}
```

### Backend Setup

1. Navigate to the API project directory:
```bash
cd dotnet-angular-credentials-auth.Server/
```

2. Run migrations:
```bash
dotnet ef database update
```

3. Start the API:
```bash
dotnet run
```

The API will be available at `https://localhost:5087`

### Frontend Setup

1. Navigate to the Angular project directory:
```bash
cd dotnet-angular-credentials-auth.client/
```

2. Install dependencies:
```bash
npm install
```

3. Start the Angular application:
```bash
ng serve
```

The application will be available at `http://localhost:4200`
