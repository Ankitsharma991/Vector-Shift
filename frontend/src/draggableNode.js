export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "100px",
        maxWidth: "200px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        borderRadius: "12px",
        backgroundColor: "#1a093f",
        border: "0.5px solid rgba(255, 255, 255, 0.4)",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10px",
        margin: "10px",
        boxSizing: "border-box",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "border-color 0.3s ease-in-out, color 0.3s ease-in-out",
      }}
      draggable
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#430A89";
        e.currentTarget.querySelector("span").style.color = "#430A89";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#fff";
        e.currentTarget.querySelector("span").style.color = "#fff";
      }}
    >
      <span
        style={{
          color: "#fff",
          fontFamily:
            '"Studio Feixen Sans Medium", "Studio Feixen Sans Medium Placeholder", sans-serif',
          fontStyle: "normal",
          fontWeight: 800,
          fontSize: "16px",
          lineHeight: "24px",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
};
