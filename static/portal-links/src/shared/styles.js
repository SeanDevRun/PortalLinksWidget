const buttonBase = {
  color: "#FFFFFF",
  border: "none",
  borderRadius: "6px",
  padding: "8px 12px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500",
  minWidth: "200px"
};

export const styles = {
  baseButton: {
    ...buttonBase,
    backgroundColor: "#004254",
  },

  linkButton: (colour) => ({
    ...buttonBase,
    backgroundColor: colour || "#004254",
    flex: "1 1 200px"
  }),

  removeButton: {
    ...buttonBase,
    backgroundColor: "#DE350B",
  },

  saveButton: (saving) => ({
    ...buttonBase,
    backgroundColor: saving ? "#0052CC" : "004254"
  }),
};