import { useEffect, useState } from "react";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../api/userService";

import { mapApiUser } from "../utils/helpers";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getUsers();

      const mappedUsers =
        response.data.map(mapApiUser);

      setUsers(mappedUsers);

    } catch (err) {
      setError(
        "Failed to load users."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ADD USER
  const addUser = async (user) => {
    try {
      setError("");

      const response =
        await createUser(user);

      const createdUser = {
        ...user,
        id:
          response.data.id ||
          Date.now()
      };

      setUsers((prev) => [
        createdUser,
        ...prev
      ]);

    } catch (err) {
      setError(
        "Failed to add user."
      );
      throw err;
    }
  };

  // EDIT USER
  const editUser = async (
    id,
    updatedUser
  ) => {
    try {
      setError("");

      await updateUser(
        id,
        updatedUser
      );

      setUsers((prev) =>
        prev.map((user) =>
          user.id === id
            ? updatedUser
            : user
        )
      );

    } catch (err) {
      setError(
        "Failed to update user."
      );
      throw err;
    }
  };

  // DELETE USER
  const removeUser = async (id) => {
    try {
      setError("");

      await deleteUser(id);

      setUsers((prev) =>
        prev.filter(
          (user) =>
            user.id !== id
        )
      );

    } catch (err) {
      setError(
        "Failed to delete user."
      );
      throw err;
    }
  };

  return {
    users,
    loading,
    error,
    addUser,
    editUser,
    removeUser
  };
};