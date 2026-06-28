# 👤 User Management Dashboard

A fully functional **React-based User Management Dashboard** that performs complete CRUD (Create, Read, Update, Delete) operations using a REST API. It also includes advanced features like **search, filter, sorting, pagination, and form validation**.

This project uses **JSONPlaceholder** as a mock backend for API testing and learning purposes.



## 🎯 Objective

The goal is to build a scalable **User Management Dashboard** that allows administrators to manage user data efficiently.

Supports:
- View users
- Search users
- Filter users
- Sort users
- Add users
- Edit users
- Delete users
- Pagination
- Validation



## 🚀 Features

- 📋 User listing in table format  
- 🔍 Real-time search  
- 🎯 Filtering system  
- ↕️ Sorting (ASC / DESC)  
- ➕ Add user  
- ✏️ Edit user  
- ❌ Delete with confirmation  
- 📄 Pagination  
- ⚠️ Validation  
- 💡 API error handling  
- 📱 Responsive UI  



## 🛠 Tech Stack

- React.js  
- JavaScript (ES6+)  
- HTML5  
- CSS3  
- Axios  



## 🌐 Live API

```
https://jsonplaceholder.typicode.com/users
```



## 📁 Project Structure

```text
src/
├── api/
│   └── userService.js
│
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── FilterModal.jsx
│   ├── UserTable.jsx
│   ├── UserForm.jsx
│   ├── DeleteModal.jsx
│   └── Pagination.jsx
│
├── hooks/
│   └── useUsers.js
│
├── utils/
│   ├── constants.js
│   ├── helpers.js
│   └── validators.js
│
├── styles/
│   └── app.css
│
├── App.jsx
└── main.jsx
```



## ⚙️ Installation

```bash
git clone https://github.com/your-username/user-management-dashboard.git
cd user-management-dashboard
npm install
npm run dev   # or npm start
```



## ⚙️ Core Functionalities

CRUD:
- GET → Fetch users  
- POST → Add user  
- PUT → Update user  
- DELETE → Remove user  

Search:
- First Name  
- Last Name  
- Email  

Sorting:
- ASC / DESC toggle  

Pagination:
- 10 / 25 / 50 / 100  



## 🔄 Data Mapping

- name → firstName + lastName  
- department → dynamic mapping  



## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | Fetch users |
| POST | /users | Create user |
| PUT | /users/:id | Update user |
| DELETE | /users/:id | Delete user |



## ⚠️ Error Handling

- API failures handled with try-catch  
- User-friendly error messages  



## 📱 Responsive Design

- Mobile friendly  
- Scrollable table  
- Adaptive UI  



## 🚀 Future Improvements

- Authentication  
- Backend integration  
- React Query  
- Tailwind CSS  


## 👨‍💻 Author

Akhila  
Built with ❤️ using React