import React from "react";

function Expenses({ onAddExpense, totalExpenses }) {
   return ( <div>
      <h2>Expenses: ${totalExpenses}</h2>
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
