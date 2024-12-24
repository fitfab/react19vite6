import { useState, useTransition } from "react";
import { simulateSave } from "./actions";

export function NewForm() {
  const [items, setItems] = useState([
    {
      text: "learn useOptimistic",
      sending: 0,
      key: 1,
    },
  ]);

  const [error, setError] = useState(null);

  const formAction = async (formData: FormData) => {
    console.log(Object.fromEntries(formData.entries()));
    const saved = await simulateSave(Object.fromEntries(formData.entries())).catch((err) => console.log(err));
    console.log(saved);
    if (!saved.error) {
      setItems((items) => [saved, ...items]);
      setError(null);
    } else {
      setError(saved.error);
    }
  };
  return (
    <div>
      <h1>TO Learn</h1>
      <form action={formAction}>
        <input type="text" name="text" />
        <input hidden name="sending" value={0} />
        <input hidden name="key" value={Math.ceil(Math.random() * 100)} />
        <button type="submit">Update</button>
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
