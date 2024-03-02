import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsPacked = useItemsStore((state) => state.markAllAsPacked);
  const markAllAsUnpacked = useItemsStore((state) => state.markAllAsUnpacked);
  const resetList = useItemsStore((state) => state.resetList);
  const deleteAll = useItemsStore((state) => state.deleteAll);
  const secondaryButtons = [
    { text: "Mark all as complete", onClick: markAllAsPacked },
    { text: "Mark all as incomplete", onClick: markAllAsUnpacked },
    { text: "Reset to initial", onClick: resetList },
    { text: "Remove all items", onClick: deleteAll },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button key={text} btnType="secondary" onClick={onClick}>
          {text}
        </Button>
      ))}
    </section>
  );
}
