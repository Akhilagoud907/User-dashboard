import { useState } from "react";
import { DEPARTMENTS } from "../utils/constants";

export default function FilterModal({
  filters,
  onApply,
  onClose
}) {
  const [formData, setFormData] =
    useState(filters);

  const handleChange = (
    event
  ) => {
    const { name, value } =
      event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Filter Users</h2>

        <div className="form-group">
          <label>
            First Name
          </label>

          <input
            name="firstName"
            value={
              formData.firstName
            }
            onChange={
              handleChange
            }
          />
        </div>

        <div className="form-group">
          <label>
            Last Name
          </label>

          <input
            name="lastName"
            value={
              formData.lastName
            }
            onChange={
              handleChange
            }
          />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            name="email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
          />
        </div>

        <div className="form-group">
  <label>
    Department
  </label>

  <select
    name="department"
    value={formData.department}
    onChange={handleChange}
  >
    <option value="">
      All Departments
    </option>

    {DEPARTMENTS.map((dep) => (
      <option
        key={dep}
        value={dep}
      >
        {dep}
      </option>
    ))}
  </select>
</div>

        <div className="modal-actions">
  <button
    className="add-btn"
    onClick={() =>
      onApply(formData)
    }
  >
    Apply
  </button>

  <button
  type="button"
  onClick={() => {
    const emptyFilters = {
      firstName: "",
      lastName: "",
      email: "",
      department: ""
    };

    setFormData(emptyFilters);
    onApply(emptyFilters);
  }}
>
  Reset
</button>

  <button
    type="button"
    onClick={onClose}
  >
    Close
  </button>
</div>
      </div>
    </div>
  );
}