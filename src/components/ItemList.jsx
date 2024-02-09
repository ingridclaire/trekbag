export default function ItemList({ items, deleteItem, toggleCheck }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          toggleCheck={toggleCheck}
        />
      ))}
    </ul>
  );
}

function Item({ item, deleteItem, toggleCheck }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => toggleCheck(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
