import { useState } from "react";

export default function Form({ setItems, items }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description){
      alert("You must enter description")
      return
    }
    const maxId = Math.max(...items.map((item) => item.id), 0);
    setItems((prevItems) => [
      ...prevItems,
      {
        id: maxId + 1,
        quantity: quantity,
        description: description,
        packed: false,
      },
    ]);
    setQuantity(1);
    setDescription("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your ❤️ trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}
