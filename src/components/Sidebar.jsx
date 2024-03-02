import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsStore } from "../stores/itemsStore";

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);
  console.log("sidebar rerendering");
  return (
    <div className="sidebar">
      <AddItemForm addItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
