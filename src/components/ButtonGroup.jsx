import Button from "./Button";

const secondaryButtons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];
export default function ButtonGroup({
  markAllAsPacked,
  markAllAsUnpacked,
  resetList,
  deleteAll,
}) {
  const handleClick = (text) => {
    switch (text) {
      case "Mark all as complete":
        return markAllAsPacked;

      case "Mark all as incomplete":
        return markAllAsUnpacked;

      case "Reset to initial":
        return resetList;

      case "Remove all items":
        return deleteAll;

      default:
        return;
    }
  };
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => (
        <Button key={text} type="secondary" handleClick={handleClick(text)}>
          {text}
        </Button>
      ))}
    </section>
  );
}
