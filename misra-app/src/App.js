import React, { useState, useEffect } from 'react';
import transactionsData from './db.json';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('none');

  // Set the initial state for transactions with data from transactionsData
  useEffect(() => {
    setTransactions(transactionsData.transactions);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Math.random();
    const formattedAmount = parseFloat(newTransaction.amount);
    if (!isNaN(formattedAmount)) {
      const newTransactionData = {
        id: newId,
        ...newTransaction,
        amount: formattedAmount,
      };
      setTransactions([...transactions, newTransactionData]);
      setNewTransaction({
        date: '',
        description: '',
        category: '',
        amount: 0,
      });
    }
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const sortedTransactions = transactions.slice().sort((a, b) => {
    if (sortType === 'category') {
      return a.category.localeCompare(b.category);
    } else if (sortType === 'description') {
      return a.description.localeCompare(b.description);
    } else {
      return 0;
    }
  });

  const filteredTransactions = sortedTransactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Transactions</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Add Transaction</button>
      </form>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label htmlFor="sortSelect">Sort by:</label>
      <select id="sortSelect" onChange={handleSortChange}>
        <option value="none">None</option>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => handleDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

