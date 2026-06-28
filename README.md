# 👤 User Management Dashboard

A fully functional **React-based User Management Dashboard** that performs complete CRUD (Create, Read, Update, Delete) operations using a REST API. It also includes advanced features like **search, filter, sorting, pagination, and form validation**.

This project uses **JSONPlaceholder** as a mock backend for API testing and learning purposes.

## 🎯 Objective

The goal of this project is to build a scalable **User Management Dashboard** that allows administrators to manage user data efficiently.

The application supports:
- View all users in a structured table
- Search users in real time
- Filter users dynamically
- Sort users by multiple fields
- Add new users
- Edit existing users
- Delete users with confirmation
- Paginate large datasets
- Handle validation and errors gracefully

## 🚀 Features

- 📋 User listing in table format  
- 🔍 Real-time search functionality  
- 🎯 Multi-field filtering (First Name, Last Name, Email, Department)  
- ↕️ Sorting (Ascending / Descending)  
- ➕ Add new user  
- ✏️ Edit user details  
- ❌ Delete user with confirmation modal  
- 📄 Pagination with page size control (10 / 25 / 50 / 100)  
- ⚠️ Form validation with error messages  
- 💡 API error handling  
- 📱 Fully responsive UI  

## 🛠 Tech Stack

- React.js (Functional Components + Hooks)  
- JavaScript (ES6+)  
- HTML5  
- CSS3  
- Axios (API communication)  

## 🌐 Live API

https://jsonplaceholder.typicode.com/users

## 📁 Project Structure

src/
│
├── api/
│   └── userService.js
│
├── components/
│   ├── Header.jsx
│   ├── UserTable.jsx
│   ├── UserForm.jsx
│   ├── SearchBar.jsx
│   ├── FilterModal.jsx
│   ├── Pagination.jsx
│   ├── DeleteModal.jsx
│
├── hooks/
│   └── useUsers.js
│
├── utils/
│   ├── constants.js
│   ├── helpers.js
│   └── validators.js
│
├── App.jsx
└── main.jsx

## ⚙️ Installation

1. Clone repository  
git clone https://github.com/your-username/user-management-dashboard.git  
cd user-management-dashboard  

2. Install dependencies  
npm install  

3. Run project  
npm run dev   (Vite)  
OR  
npm start     (CRA)  

## ▶️ How It Works

Users are fetched from API automatically  
Data is displayed in a structured table  
Search bar filters users instantly  
Filter modal allows advanced filtering  
Clicking table headers sorts data  
Add/Edit opens form modal  
Delete triggers confirmation popup  
Pagination controls dataset size  

## ⚙️ Core Functionalities

CRUD Operations  
GET → Fetch users  
POST → Add user  
PUT → Update user  
DELETE → Remove user  

Search Logic  
Filters users by First Name, Last Name, Email  

Sorting  
Alphabetical sorting with ASC / DESC toggle  

Pagination  
10 / 25 / 50 / 100 records per page using slice-based rendering  

## 🔄 Data Mapping Assumptions

name is split into:
- firstName  
- lastName  

Department is assigned dynamically using:
DEPARTMENTS[user.id % DEPARTMENTS.length]  

## 🔌 API Endpoints

Method | Endpoint | Description  
GET | /users | Fetch users  
POST | /users | Create user  
PUT | /users/:id | Update user  
DELETE | /users/:id | Delete user  

## ⚠️ Error Handling

All API calls use try-catch blocks  
Errors handled:
- Failed to load users  
- Failed to add user  
- Failed to update user  
- Failed to delete user  

## 📱 Responsive Design

Mobile-friendly layout  
Scrollable table on small screens  
Adaptive modals  
Touch-friendly buttons  

## 🚀 Future Improvements

Authentication system (Login/Signup)  
Backend integration (Node.js + MongoDB)  
React Query caching  
Tailwind CSS / Material UI upgrade  
Debounced search  
Analytics dashboard  

## 👨‍💻 Author

Akhila
Built with ❤️ using React for learning and CRUD practice.