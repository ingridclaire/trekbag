import { useEffect, useState } from "react";
import "./App.css";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemsFromStorage || initialItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    setItems([
      ...items,
      {
        id: new Date().getTime(),
        name: newItem,
        packed: false,
      },
    ]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleCheck = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      })
    );
  };

  const markAllAsUnpacked = () => {
    setItems(items.map((item) => ({ ...item, packed: false })));
  };

  const markAllAsPacked = () => {
    setItems(items.map((item) => ({ ...item, packed: true })));
  };

  const resetList = () => {
    setItems(initialItems);
  };

  const deleteAll = () => {
    setItems([]);
  };
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          total={items.length}
          numberPacked={items.filter((item) => item.packed).length}
        />
        <ItemList
          items={items}
          deleteItem={deleteItem}
          toggleCheck={toggleCheck}
        />
        <Sidebar
          addItem={addItem}
          markAllAsPacked={markAllAsPacked}
          markAllAsUnpacked={markAllAsUnpacked}
          deleteAll={deleteAll}
          resetList={resetList}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
