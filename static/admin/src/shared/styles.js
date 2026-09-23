export const appPrimaryColor =  "#004254";
export const appSuccessColor = "#36B37E";
export const appErrorColor =  "#DE350B";
export const appTextColor =  "#FFFFFF";

const buttonBase = {
  color: appTextColor,
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
    backgroundColor: appPrimaryColor,
  },

  linkButton: (colour) => ({
    ...buttonBase,
    backgroundColor: colour || appPrimaryColor,
    width: "100%"
  }),

  removeButton: {
    ...buttonBase,
    backgroundColor: appErrorColor,
    minWidth: "auto"
  },

  saveButton: (status) => ({
    ...buttonBase,
    backgroundColor: {
      idle: appPrimaryColor,
      saving: "#0052CC",
      saved: appSuccessColor,
      error: appErrorColor,
    }[status] || appPrimaryColor,
  }),
};