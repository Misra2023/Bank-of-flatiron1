import React, {useState} from "react";



function Search( {handleSearching}) {
 const [search ,setSearch]=useState ("")

  function handleSearch(values) {
    setSearch(values)
     console.log(search);
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e)=>{
          handleSearch(e.target.value)
        }}
      />
      <i className="circular search link icon"
        onClick={()=>{
          handleSearching(search)
        }}
      ></i>
    </div>
  );
}

export default Search;
