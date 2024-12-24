import { useState, useTransition } from "react";

export function NewForm() {
  const [items, setItems] = useState([
    {
      text: "learn useOptimistic",
      sending: false,
      key: 1,
    },
  ]);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const newItem = event.target?.item.value;
    setItems((items) => [...items, { text: newItem, sending: false, key: Math.random() * 100 }]);
  };
  return (
    <div>
      <h1>TO Learn</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" />
        <button type="submit" disabled={isPending}>
          Update
        </button>
        {error && <p>{error}</p>}
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.key}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
