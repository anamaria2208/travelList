import React, { useState } from "react";

export default function List({ items, handleChecked, handleDelete, setItems }) {
  const [selectedSort, setSelectedSort] = useState("input");

  const handleClearList = () => {
    if (window.confirm("Are you sure you want to delete all items?")) {
      setItems([]);
    }
  };

  const handleSortChange = (e) => {
    debugger;
    setSelectedSort(e.target.value);
    switch (e.target.value) {
      case "input":
        setItems(items.sort((a, b) => a.id - b.id));
        break;

      case "description":
        setItems(
          items.sort((a, b) => {
            const descriptionA = a.description.toUpperCase();
            const descriptionB = b.description.toUpperCase();
            if (descriptionA < descriptionB) {
              return -1;
            }
            if (descriptionA > descriptionB) {
              return 1;
            }
            return 0;
          })
        );
        break;

      case "packed":
        setItems(items.sort((a, b) => a.packed - b.packed));
        break;

      default:
        break;
    }
  };

  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <li>
                <input
                  type="checkbox"
                  onChange={() => handleChecked(item.id)}
                  checked={item.packed}
                />
                <span
                  style={item.packed ? { textDecoration: "line-through" } : {}}
                >
                  {item.quantity} {item.description}
                </span>
                <button onClick={() => handleDelete(item.id)}>❌</button>{" "}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
      <div className="actions">
        <select value={selectedSort} onChange={handleSortChange}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
}
