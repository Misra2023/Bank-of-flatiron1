import React from "react";
import TransactionList from "../TransactionList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, transaction, search, setSearch , handleSearching}) {

  return (
    <div>
      <Search handleSearching = {handleSearching} />
      <AddTransactionForm />
      <TransactionList
        transactions={transactions}
        transaction={transaction}
        
      />
    </div>
  );
}

export default AccountContainer;
