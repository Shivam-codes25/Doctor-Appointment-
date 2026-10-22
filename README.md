# 🩺 Doctor Appointment Booking System

A full-stack doctor appointment booking application built using the MERN stack. The platform provides three separate panels: a patient-facing frontend, an admin panel, and a doctor panel, supported by a Node.js and Express.js backend API.

Patients can browse doctors, book appointments, manage their profiles, and make online payments. Admins can manage doctors and appointments, while doctors can view assigned appointments, update their profiles, and manage appointment statuses.

## 🛠️ Tech Stack

### ⚙️ Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JSON Web Tokens (JWT)
- **Password Hashing:** bcrypt
- **File Uploads:** Multer and Cloudinary
- **Payment Gateways:** Razorpay and Stripe
- **Other Tools:** CORS, Validator, dotenv

### 🧑‍💻 Patient Frontend
- **Framework:** React 18 with Vite
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Notifications:** React Toastify

### 🛡️ Admin & Doctor Panel
- **Framework:** React 18 with Vite
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Notifications:** React Toastify

## ✨ Features

### 🙋 Patient Panel
- User registration and login
- Browse doctors by speciality
- View doctor profiles and availability
- Book appointments using available time slots
- View and cancel appointments
- Online payments using Razorpay and Stripe
- Update personal profile information
- Upload and update profile images

### 🛡️ Admin Panel
- Secure admin login
- Add new doctors with profile images
- View and manage all doctors
- Manage doctor availability
- View and cancel appointments
- Dashboard with statistics

### 👨‍⚕️ Doctor Panel
- Doctor login
- View assigned appointments
- Mark appointments as completed or cancelled
- Manage availability
- View dashboard statistics and earnings
- View and update doctor profile

## 📁 Project Structure

```text
Doctor-Appointment/
├── backend/
│   ├── config/             # Database and Cloudinary configuration
│   ├── controllers/        # Admin, doctor, and user controllers
│   ├── middleware/         # Authentication and upload middleware
│   ├── models/             # User, doctor, and appointment schemas
│   ├── routes/             # API route definitions
│   └── server.js           # Backend entry point
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/         # Images and static assets
│       ├── components/     # Reusable UI components
│       ├── context/        # React Context for state management
│       └── pages/          # Patient-facing pages
│
└── admin/
    ├── public/
    └── src/
        ├── assets/         # Icons and images
        ├── components/     # Navbar and Sidebar
        ├── context/        # Admin, doctor, and app contexts
        └── pages/          # Admin and doctor pages
```

## ⚙️ Prerequisites

Make sure you have the following installed or configured:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm
- [MongoDB Atlas](https://www.mongodb.com/atlas) or a local MongoDB instance
- [Cloudinary](https://cloudinary.com/) account
- [Razorpay](https://razorpay.com/) account
- [Stripe](https://stripe.com/) account (if using Stripe payments)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Doctor-Appointment
```

Replace `<repository-url>` with your GitHub repository URL.

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Patient Frontend Dependencies

Open a new terminal:

```bash
cd Doctor-Appointment/frontend
npm install
```

### 4. Install Admin Panel Dependencies

Open another terminal:

```bash
cd Doctor-Appointment/admin
npm install
```

## 🔑 Environment Variables

Create a `.env` file in each of the following directories.

### Backend (`backend/.env`)

```env
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password

MONGODB_URI=your_mongodb_connection_string

CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Patient Frontend (`frontend/.env`)

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Admin Panel (`admin/.env`)

```env
VITE_CURRENCY=₹
VITE_BACKEND_URL=http://localhost:4000
```

**Important:** Replace all placeholder values with your actual credentials. Never commit `.env` files or expose secret API keys in your repository. Only frontend variables prefixed with `VITE_` should be treated as potentially public.

## ▶️ Running the Application

Run each part of the application in a separate terminal.

### 1. Start the Backend Server

```bash
cd backend
npm run server
```

The backend API will run at:

```text
http://localhost:4000
```

### 2. Start the Patient Frontend

```bash
cd frontend
npm run dev
```

Vite will display the local development URL in your terminal.

### 3. Start the Admin & Doctor Panel

```bash
cd admin
npm run dev
```

Vite will display the local development URL for the admin and doctor panel.

## 🔌 API Endpoints

All endpoints are relative to the backend base URL:

```text
http://localhost:4000
```

### 🙋 User Routes — `/api/user`

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| POST | `/register` | No | Register a new user |
| POST | `/login` | No | Log in a user |
| GET | `/get-profile` | Yes | Retrieve user profile |
| POST | `/update-profile` | Yes | Update profile and image |
| POST | `/book-appointment` | Yes | Book an appointment |
| GET | `/appointments` | Yes | Retrieve user appointments |
| POST | `/cancel-appointment` | Yes | Cancel an appointment |
| POST | `/payment-razorpay` | Yes | Initiate Razorpay payment |
| POST | `/verifyRazorpay` | Yes | Verify Razorpay payment |
| POST | `/payment-stripe` | Yes | Initiate Stripe payment |
| POST | `/verifyStripe` | Yes | Verify Stripe payment |

### 🛡️ Admin Routes — `/api/admin`

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| POST | `/login` | No | Admin login |
| POST | `/add-doctor` | Yes | Add a doctor with an image |
| GET | `/appointments` | Yes | Retrieve all appointments |
| POST | `/cancel-appointment` | Yes | Cancel an appointment |
| GET | `/all-doctors` | Yes | Retrieve all doctors |
| POST | `/change-availability` | Yes | Toggle doctor availability |
| GET | `/dashboard` | Yes | Retrieve dashboard statistics |

### 👨‍⚕️ Doctor Routes — `/api/doctor`

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| POST | `/login` | No | Doctor login |
| GET | `/list` | No | Retrieve the list of doctors |
| GET | `/appointments` | Yes | Retrieve assigned appointments |
| POST | `/cancel-appointment` | Yes | Cancel an appointment |
| POST | `/change-availability` | Yes | Toggle doctor availability |
| POST | `/complete-appointment` | Yes | Mark an appointment as completed |
| GET | `/dashboard` | Yes | Retrieve doctor dashboard data |
| GET | `/profile` | Yes | Retrieve doctor profile |
| POST | `/update-profile` | Yes | Update doctor profile |

*Note: Authentication requirements and endpoint behavior should match your actual backend middleware and route configuration.*

## 🌍 Deployment

The patient frontend, admin panel, and backend can be deployed independently.

- **Backend:** [Render](https://render.com/), [Railway](https://railway.app/), or another Node.js hosting platform
- **Patient Frontend:** [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
- **Admin & Doctor Panel:** Vercel or Netlify
- **Database:** MongoDB Atlas
- **Image Storage:** Cloudinary

### Deployment Checklist

1. Deploy the backend and configure all required environment variables.
2. Configure the MongoDB Atlas connection and database access.
3. Configure Cloudinary and payment gateway credentials.
4. Update `VITE_BACKEND_URL` in both frontend applications to point to the deployed backend URL.
5. Configure CORS to allow requests from your deployed frontend domains.
6. Configure the frontend build settings and output directories on your hosting platform.
7. Test authentication, appointment booking, cancellation, image uploads, and payment verification in the deployed environment.

## 🔐 Security Notes

- Passwords should be hashed before being stored in the database.
- Protected routes should validate JWTs and enforce role-based authorization.
- Payment verification must be performed on the backend.
- Sensitive credentials must be stored in environment variables.
- Avoid exposing secret keys or committing credentials to version control.

## 👨‍💻 Author

**Suhani Parikh**

- GitHub: [SPARIKH-2706](https://github.com/SPARIKH-2706)

---

If you find this project useful, consider giving the repository a ⭐ on GitHub.
