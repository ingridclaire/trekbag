import Button from "./Button";

export default function ButtonGroup({
  markAllAsPacked,
  markAllAsUnpacked,
  resetList,
  deleteAll,
}) {
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
