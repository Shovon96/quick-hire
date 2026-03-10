## Frontend Live URL: https://qtec-quick-hire.vercel.app
## Backend Live URL: https://quick-hire-server-amber.vercel.app

---

# QuickHire - Job Portal Application

QuickHire is a full-stack job portal application that connects job seekers with employers. The platform allows users to browse job listings, apply for positions, and enables administrators to manage job postings and applications.

## 🚀 Features

- **User Authentication**: Secure registration and login with JWT-based authentication
- **Role-Based Access Control**: Separate interfaces for regular users and administrators
- **Job Listings**: Browse and search available job positions
- **Admin Dashboard**: Manage jobs, users, and applications
- **Responsive Design**: Mobile-friendly interface built with Next.js and Tailwind CSS
- **Cookie-Based Sessions**: Secure session management with HTTP-only cookies

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.1.6 (React 19.2.3)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **UI Components**: Lucide React icons, Recharts for data visualization
- **Authentication**: JWT token handling

### Backend
- **Runtime**: Node.js with Express 5.2.1
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken) with bcryptjs for password hashing
- **Validation**: Zod schema validation
- **Security**: CORS, cookie-parser, HTTP-only cookies

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd quick_hire
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd quick_hire_server
npm install
```

### 3. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd ../quick_hire_frontend
npm install
```

## 🔐 Environment Variables

### Backend Environment Variables

Create a `.env` file in the `quick_hire_server` directory with the following variables:

```env
# Database Configuration
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secrets (Change these in production!)
JWT_SECRET=your_jwt_secret_key_here
REFRESH_SECRET=your_refresh_jwt_secret_key_here
```

**Important Notes:**
- Replace `DB_USER` and `DB_PASS` with your MongoDB credentials
- For MongoDB Atlas, update the connection string in your config file
- **Never commit the `.env` file to version control**
- Use strong, unique secrets for JWT tokens in production

### Frontend Environment Variables (Optional)

If you need to configure API endpoints, create a `.env.local` file in the `quick_hire_frontend` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🚀 Running the Application

### Start the Backend Server

```bash
cd quick_hire_server
npm run dev
```

The backend server will start on `http://localhost:5000`

### Start the Frontend Application

In a new terminal window:

```bash
cd quick_hire_frontend
npm run dev
```

The frontend application will start on `http://localhost:3000`

---

## 🔑 API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info (requires authentication)
- `POST /api/auth/logout` - Logout user

### Jobs

- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create a new job (admin only)
- `GET /api/jobs/:id` - Get job by ID
- `DELETE /api/jobs/:id` - Delete job (admin only)

### Applications

- `POST /api/applications` - Apply a job (only users)

## 👥 User Roles

- **USER**: Regular users who can browse and apply for jobs
- **ADMIN**: Administrators who can manage jobs and view applications

## 📦 Building for Production

### Build Backend

```bash
cd quick_hire_server
npm run build
npm start
```

### Build Frontend

```bash
cd quick_hire_frontend
npm run build
npm start
```

## 🌐 Deployment

The application is configured for deployment on:
- **Frontend**: Vercel
- **Backend**: Vercel

---

**Happy Hiring! 🎉**
