import React from "react";
import styles from "./Expenses.module.css";

function Expenses({ onAddExpense, totalExpenses }) {
   return ( <div>
      <h2>Expenses: <span className={styles.total_expenses}>${totalExpenses}</span></h2>
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
