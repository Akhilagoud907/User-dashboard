import { useMemo, useState, useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import FilterModal from "./components/FilterModal";
import DeleteModal from "./components/DeleteModal";
import Pagination from "./components/Pagination";

import { useUsers } from "./hooks/useUsers";
import { sortUsers } from "./utils/helpers";

function App() {
  const {
    users,
    loading,
    error,
    addUser,
    editUser,
    removeUser
  } = useUsers();

  const [searchText, setSearchText] = useState("");

  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: ""
  });

  const [sortField, setSortField] = useState("firstName");
  const [sortOrder, setSortOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteUserId, setDeleteUserId] = useState(null);

  useEffect(() => {
  setCurrentPage(1);
}, [searchText, filters]);

  // Filter + Search
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchMatch =
        user.firstName
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        user.lastName
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        user.email
          .toLowerCase()
          .includes(searchText.toLowerCase());

      const filterMatch =
        user.firstName
          .toLowerCase()
          .includes(filters.firstName.toLowerCase()) &&
        user.lastName
          .toLowerCase()
          .includes(filters.lastName.toLowerCase()) &&
        user.email
          .toLowerCase()
          .includes(filters.email.toLowerCase()) &&
        user.department
          .toLowerCase()
          .includes(filters.department.toLowerCase());

      return searchMatch && filterMatch;
    });
  }, [users, searchText, filters]);

  // Sorting
  const sortedUsers = useMemo(() => {
    return sortUsers(
      filteredUsers,
      sortField,
      sortOrder
    );
  }, [
    filteredUsers,
    sortField,
    sortOrder
  ]);

  // Pagination
  const totalPages = Math.ceil(
    sortedUsers.length / pageSize
  );

  const paginatedUsers = useMemo(() => {
    const start =
      (currentPage - 1) * pageSize;

    return sortedUsers.slice(
      start,
      start + pageSize
    );
  }, [
    sortedUsers,
    currentPage,
    pageSize
  ]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder((prev) =>
        prev === "asc"
          ? "desc"
          : "asc"
      );
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleAddUser = async (userData) => {
  try {
    await addUser(userData);

    toast.success(
      "User added successfully!"
    );

    setShowForm(false);
  } catch (error) {
    toast.error(
      "Failed to add user"
    );

    console.error(error);
  }
};

 const handleEditUser = async (
  userData
) => {
  try {
    await editUser(
      selectedUser.id,
      {
        ...userData,
        id: selectedUser.id
      }
    );

    toast.success(
      "User updated successfully!"
    );

    setSelectedUser(null);
    setShowForm(false);
  } catch (error) {
    toast.error(
      "Failed to update user"
    );

    console.error(error);
  }
};

const handleDelete = async () => {
  try {
    await removeUser(deleteUserId);

    toast.success(
      "User deleted successfully!"
    );

    setDeleteUserId(null);
    setShowDelete(false);
  } catch (error) {
    toast.error(
      "Failed to delete user"
    );

    console.error(error);
  }
};

  if (loading) {
    return (
      <div className="loading">
        Loading users...
      </div>
    );
  }

  return (
    <div className="app">

      <Header
        onAdd={() => {
          setSelectedUser(null);
          setShowForm(true);
        }}
      />

      {error && (
        <div className="alert-error">
          {error}
        </div>
      )}

      <div className="toolbar">
        <SearchBar
          value={searchText}
          onChange={setSearchText}
        />

        <button
          className="filter-btn"
          onClick={() =>
            setShowFilter(true)
          }
        >
          Filters
        </button>
      </div>

      <div className="table-wrapper">
        <UserTable
          users={paginatedUsers}
          onSort={handleSort}
          onEdit={(user) => {
            setSelectedUser(user);
            setShowForm(true);
          }}
          onDelete={(id) => {
            setDeleteUserId(id);
            setShowDelete(true);
          }}
        />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={
          totalPages || 1
        }
        pageSize={pageSize}
        onPageChange={
          setCurrentPage
        }
        onPageSizeChange={(
          size
        ) => {
          setPageSize(size);
          setCurrentPage(1);
        }}
      />

      {/* Add/Edit User */}

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <UserForm
              initialData={
                selectedUser
              }
              onSubmit={
                selectedUser
                  ? handleEditUser
                  : handleAddUser
              }
              onClose={() =>
                setShowForm(false)
              }
            />
          </div>
        </div>
      )}

      {/* Filters */}

      {showFilter && (
        <FilterModal
          filters={filters}
          onApply={(data) => {
            setFilters(data);
            setCurrentPage(1);
            setShowFilter(false);
          }}
          onClose={() =>
            setShowFilter(false)
          }
        />
      )}

      {/* Delete */}

      {showDelete && (
        <DeleteModal
          onConfirm={
            handleDelete
          }
          onCancel={() =>
            setShowDelete(false)
          }
        />
      )}

      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
/>

    </div>
  );
}

export default App;
