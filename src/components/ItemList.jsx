import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

export default function ItemList({ items, deleteItem, toggleCheck }) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "default") {
      return 0;
    }
    if (sortBy === "packed") {
      return a.packed === b.packed ? 0 : a.packed ? -1 : 1;
    }
    if (sortBy === "unpacked") {
      return a.packed === b.packed ? 0 : a.packed ? 1 : -1;
    }
  });
  return (
    <ul className="item-list">
      {items.length > 0 ? (
        <>
          <section className="sorting">
            <Select
              defaultValue={sortingOptions[0]}
              options={sortingOptions}
              onChange={(option) => setSortBy(option.value)}
            />
          </section>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={deleteItem}
              onToggleCheck={toggleCheck}
            />
          ))}
        </>
      ) : (
        <EmptyView />
      )}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleCheck }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleCheck(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
