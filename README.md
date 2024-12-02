# Job Portal Web Application

This is a Job Portal web application built as part of an assignment using the **MERN stack** (MongoDB, Express, React, Node.js) and **Redux** for state management. The portal allows users to search for jobs, apply for them, and manage their profiles. Admins can post new jobs, view applications, and manage job listings.

## Features

- **User Authentication:** Users can sign up, log in, and manage their profiles.
- **Job Search & Filter:** Users can search for jobs based on different criteria (e.g., location, job type).
- **Job Application:** Users can apply for jobs and track their applications.
- **Admin Dashboard:** Admins can add, edit, and delete job listings.
- **State Management:** Utilizes Redux to manage the application state efficiently.
- **Responsive Design:** The application is mobile-friendly and responsive across all devices.

## Technologies

### Frontend
- **React.js**
- **Redux** for state management
- **Axios** for API requests
- **React Router** for navigation
- **CSS3 / Styled-components** for styling

### Backend
- **Node.js** with **Express.js**
- **MongoDB** for database
- **JWT (JSON Web Tokens)** for authentication
- **bcrypt** for password hashing

## API Endpoints

- **POST /api/users/register** - Register a new user.
- **POST /api/users/login** - Log in and return a JWT token.
- **GET /api/jobs** - Get all available job listings.
- **POST /api/jobs** - Add a new job listing (Admin only).
- **GET /api/jobs/:id** - Get details of a specific job.
- **POST /api/jobs/:id/apply** - Apply for a specific job.
- **GET /api/users/profile** - Get user profile information (requires authentication).

## How to Run the Application

### Prerequisites
- **Node.js** installed on your machine.
- **MongoDB** installed locally or a MongoDB Atlas connection string.
- A package manager (**npm** or **yarn**).

### Steps

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd <repository_folder>
