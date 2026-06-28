export default function DeleteModal({
  onConfirm,
  onCancel
}) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="delete-modal-icon">
          !
        </div>

        <h2>Delete User</h2>

        <p>
          Are you sure you want to
          delete this user?
        </p>

        <div className="modal-actions">
          <button
            className="delete-btn"
            onClick={onConfirm}
          >
            Delete
          </button>

          <button onClick={onCancel}>
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}