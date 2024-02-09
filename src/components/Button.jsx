export default function Button({ children, type, handleClick = null }) {
  return (
    <button
      className={`btn ${type === "secondary" && "btn--secondary"}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
