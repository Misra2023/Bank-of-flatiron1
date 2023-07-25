import React, { useEffect, useState } from "react";
import AccountContainer from "./components/AccountContainer";
function App() {
  const [transaction, setTransaction] = useState([]);
  // const [search, setSearch] = useState("");


  useEffect(() => {       
    fetch("https://codechallengeone.vercel.app/transactions")
      .then((res) => res.json())
      .then((data) => setTransaction(data));
  }, []);


  const handleSearching = (Search)=>{
    let newOutput = transaction.filter((newTransaction)=>{
    return newTransaction.description.toLowerCase().includes(Search.toLowerCase())
     
 
    })
    setTransaction(newOutput)
 }

  const handleTransList = (addTrans) => {
    const newTransList = [...transaction, addTrans];
    setTransaction(newTransList);
  };

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer
        getTransactions={handleTransList}
        transaction={transaction}
        handleSearching = {handleSearching}
        
      />
    </div>
  );
}

export default App;

