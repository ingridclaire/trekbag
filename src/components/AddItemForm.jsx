import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ addItem }) {
  const [newItem, setNewItem] = useState("");
  const [error, setError] = useState("");
  const ref = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem.trim()) {
      setError("Item can't be empty");
      setTimeout(() => {
        setError("");
      }, 2000);
      ref.current.focus();
      return;
    }
    addItem(newItem);
    setNewItem("");
    ref.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={ref}
        type="text"
        placeholder="Type to add an item"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
        autoFocus
      />
      <Button>Add to list</Button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </form>
  );
}
