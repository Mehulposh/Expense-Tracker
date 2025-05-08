import React from "react";

function Expenses({ onAddExpense  }) {
   return ( <div>
      {/* <h2>Wallet Balance: ${balance.toFixed(2)}</h2> */}
      <button
        type="button"
        onClick={onAddExpense}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        + Add Expense
      </button>
      </div>)
}

export default Expenses;
