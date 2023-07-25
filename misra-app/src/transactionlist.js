import React from "react";
import Transaction from "./components/Transaction";

function TransactionsList({ transaction, search }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>

      <Transaction transaction={transaction} />
    </table>
  );
}

export default TransactionsList;