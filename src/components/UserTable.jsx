export default function UserTable({
  users,
  onEdit,
  onDelete,
  onSort,
  sortField,
  sortOrder
}) {
  const getSortIcon = (field) => {
    if (sortField !== field) {
      return " ↕";
    }

    return sortOrder === "asc"
      ? " ↑"
      : " ↓";
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>

          <th
            onClick={() =>
              onSort("firstName")
            }
          >
            First Name
            {getSortIcon(
              "firstName"
            )}
          </th>

          <th
            onClick={() =>
              onSort("lastName")
            }
          >
            Last Name
            {getSortIcon(
              "lastName"
            )}
          </th>

          <th
            onClick={() =>
              onSort("email")
            }
          >
            Email
            {getSortIcon(
              "email"
            )}
          </th>

          <th
            onClick={() =>
              onSort(
                "department"
              )
            }
          >
            Department
            {getSortIcon(
              "department"
            )}
          </th>

          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.length === 0 ? (
          <tr>
            <td
              colSpan="6"
              style={{
                textAlign:
                  "center",
                padding: "20px"
              }}
            >
              No users found
            </td>
          </tr>
        ) : (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>
                {user.firstName}
              </td>

              <td>
                {user.lastName}
              </td>

              <td>
                {user.email}
              </td>

              <td>
                {user.department}
              </td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() =>
                    onEdit(user)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    onDelete(
                      user.id
                    )
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}