import React from "react";
import styles from "./Expenses.module.css";

function Expenses({ onAddExpense, totalExpenses }) {

  const formattedWxpense = typeof totalExpenses === 'number' 
    ? totalExpenses.toLocaleString('en-US', { style: 'currency', currency: 'INR' })
    : "0.00";
   return ( <div>
      <h2>Expenses: <span className={styles.total_expenses}>{formattedWxpense}</span></h2>
      <button
        type="button"
        onClick={onAddExpense}
        className={styles.addExpenseButton}
      >
        + Add Expense
      </button>
      </div>)
}

export default Expenses;
