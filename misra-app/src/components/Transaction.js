import React from "react";

function Transaction({ transaction }) {
  
  const trans = transaction.map((transObj, index) => {
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

export default Transaction;
