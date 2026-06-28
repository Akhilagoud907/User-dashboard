import { useState } from "react";
import { validateUser } from "../utils/validators";
import { DEPARTMENTS } from "../utils/constants";

export default function UserForm({
  initialData,
  onSubmit,
  onClose
}) {
  const [formData, setFormData] = useState(
    initialData || {
      firstName: "",
      lastName: "",
      email: "",
      department: ""
    }
  );

  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors =
    validateUser(formData);

  if (
    Object.keys(validationErrors)
      .length > 0
  ) {
    setErrors(validationErrors);
    return;
  }

  try {
    setSaving(true);

    await onSubmit(formData);

  } finally {
    setSaving(false);
  }
};

  return (
    <form
      className="user-form"
      onSubmit={handleSubmit}
    >
      <h2>
        {initialData
          ? "Edit User"
          : "Add User"}
      </h2>

      <div className="form-group">
        <label>First Name</label>

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        {errors.firstName && (
          <p className="error-text">
            {errors.firstName}
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Last Name</label>

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        {errors.lastName && (
          <p className="error-text">
            {errors.lastName}
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {errors.email && (
          <p className="error-text">
            {errors.email}
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Department</label>

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">
            Select Department
          </option>

          {DEPARTMENTS.map(
            (department) => (
              <option
                key={department}
                value={department}
              >
                {department}
              </option>
            )
          )}
        </select>

        {errors.department && (
          <p className="error-text">
            {errors.department}
          </p>
        )}
      </div>

      <div className="modal-actions">
        <button
  className="add-btn"
  type="submit"
  disabled={saving}
>
  {saving ? "Saving..." : "Save"}
</button>

        <button
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}