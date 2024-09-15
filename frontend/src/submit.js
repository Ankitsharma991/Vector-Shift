export const SubmitButton = () => {
  const buttonStyle = {
    padding: "12px 24px",
    background: "linear-gradient(45deg, #461892 25%, #3377D0 75%)",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "55px",
  };

  const hoverStyle = {
    background: "linear-gradient(45deg, #3d147f 25%, #2e66ac 75%)",
    transform: "scale(1.05)",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, hoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, buttonStyle);
  };

  return (
    <div style={containerStyle}>
      <button
        type="submit"
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Submit
      </button>
    </div>
  );
};
