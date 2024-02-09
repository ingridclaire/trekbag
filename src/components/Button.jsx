export default function Button({ children, btnType, onClick = null }) {
  return (
    <button
      className={`btn ${btnType === "secondary" && "btn--secondary"}`}
      onClick={onClick}
      type={btnType === "secondary" ? "button" : "submit"}
    >
      {children}
    </button>
  );
}
