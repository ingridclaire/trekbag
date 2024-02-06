import Button from "./Button";

export default function AddItemForm() {
  return (
    <form>
      <h2>Add an item</h2>
      <input type="text" placeholder="Type to add an item" />
      <Button>Add to list</Button>
    </form>
  );
}
