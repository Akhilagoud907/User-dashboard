import { DEPARTMENTS } from "./constants";

export const mapApiUser = (user) => {
  const names = user.name.split(" ");

  return {
    id: user.id,
    firstName: names[0] || "",
    lastName: names.slice(1).join(" ") || "",
    email: user.email,
    department:
      DEPARTMENTS[
        user.id % DEPARTMENTS.length
      ]
  };
};

export const sortUsers = (
  users,
  field,
  order
) => {
  return [...users].sort((a, b) => {
    const aValue = String(
      a[field]
    ).toLowerCase();

    const bValue = String(
      b[field]
    ).toLowerCase();

    return order === "asc"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });
};