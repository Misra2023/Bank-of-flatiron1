import React, { useState } from "react";

function AddTransactionForm() {
  const [date, setDate] = useState([]);
  const [amount, setAmount] = useState([]);
  const [description, setDesciption] = useState([]);
  const [category, setCategory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = { date, amount, description, category };

    fetch("https://codechallengeone.vercel.app/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    }).then(() => {
      window.location.reload()

    });
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDesciption(e.target.value)}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button href= "/home" className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
