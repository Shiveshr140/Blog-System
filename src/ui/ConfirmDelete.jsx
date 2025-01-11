const StyledConfirmDelete = {
  width: "40rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
};

function ConfirmDelete({ resourceName, onConfirm, onCloseModal }) {
  return (
    <div style={{ StyledConfirmDelete }}>
      <h3>Delete {resourceName}</h3>
      <p style={{ color: "var(--color-grey-500)", marginBottom: "1.2rem" }}>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div
        style={{ display: "flex", justifyContent: "flex-end", gap: "1.2rem" }}
      >
        <button
          style={{
            color: "#4b5563",
            background: "#fff",
            border: "1px solid #e5e7eb",
            fontSize: "1rem",
            padding: "1rem 1rem",
            fontWeight: "500",
            borderRadius: "5px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
          }}
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          style={{
            color: "#fee2e2",
            backgroundColor: "#b91c1c",
            fontSize: "1rem",
            padding: "1rem 1rem",
            fontWeight: "500",
            border: "none",
            borderRadius: "5px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
          }}
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
