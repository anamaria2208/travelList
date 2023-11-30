import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleChecked = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDelete = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="app">
      <Header />
      <Form setItems={setItems} items={items} />
      <List
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
        setItems={setItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
