import React, { useEffect, useState } from "react"

function App() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://codechallengeone.vercel.app/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  const handleSearching = (searchValue) => {
    setSearch(searchValue);
  };

  

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      {/* Render Search Input */}
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder="Search your Recent Transactions"
          onChange={(e) => {
            handleSearching(e.target.value);
          }}
        />
        <i
          className="circular search link icon"
          onClick={() => {
            handleSearching(search);
          }}
        ></i>
      </div>

      {/* Add Transaction Form */}
      {/* Implement your form here */}

      {/* Render TransactionList */}
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

function TransactionList({ transactions }) {
  const trans = transactions.map((transObj, index) => {
    return (
      <tr key={index}>
        <td>{transObj.date}</td>
        <td>{transObj.category}</td>
        <td>{transObj.description}</td>
        <td>{transObj.amount}</td>
      </tr>
    );
  });
  return <tbody>{trans}</tbody>;
}

export default App;
