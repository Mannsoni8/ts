import React, { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) {
    e.preventDefault();

    onSubmit({
      name,
      cups,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Chai Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Number of Cups</label>
      <input
        type="number"
        value={cups}
        onChange={(e) => setCups(Number(e.target.value) || 0)}
      />

      <button type="submit">Order Chai</button>
    </form>
  );
};