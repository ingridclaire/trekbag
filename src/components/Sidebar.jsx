import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  addItem,
  markAllAsPacked,
  markAllAsUnpacked,
  deleteAll,
  resetList,
}) {
  return (
    <div className="sidebar">
      <AddItemForm addItem={addItem} />
      <ButtonGroup
        markAllAsPacked={markAllAsPacked}
        markAllAsUnpacked={markAllAsUnpacked}
        resetList={resetList}
        deleteAll={deleteAll}
      />
    </div>
  );
}
