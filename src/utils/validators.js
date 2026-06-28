export const validateUser = (user) => {
  const errors = {};

  if (!user.firstName.trim()) {
    errors.firstName =
      "First Name is required";
  }

  if (!user.lastName.trim()) {
    errors.lastName =
      "Last Name is required";
  }

  if (!user.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^\S+@\S+\.\S+$/.test(user.email)
  ) {
    errors.email = "Invalid email";
  }

  if (!user.department) {
    errors.department =
      "Department is required";
  }

  return errors;
};