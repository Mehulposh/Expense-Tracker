import React from "react";
import Modal from "react-modal";

const categories = ["Food", "Travel", "Shopping", "Other"];

function ExpensesModal({ onRequestClose,expense, setExpenses, handleAddExpenses }) {
    return(
        <Modal 
            isOpen
            onRequestClose={onRequestClose}
            contentLabel="Add Expenses"
        >
        <form onSubmit={(e) => {
          e.preventDefault(); // Prevent form submission reload
          handleAddExpenses();
        }}>
            <h2>Add Expenses</h2>
            <input type="text" name="title" placeholder="Title" value={expense.title}  onChange={(e) =>
                setExpenses((prev) => ({ ...prev, title: e.target.value }))}
            />
            <input 
                type="number" 
                name="Price" 
                placeholder="Price"   
                value={expense.amount}
                onChange={(e) =>
                    setExpenses((prev) => ({ ...prev, amount: e.target.value }))
                }/>
            <select name="category" placeholder="Category">
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <input 
                type="date"
                name="date" 
                placeholder="Date"  
                value={expense.date}
                onChange={(e) =>
                    setExpenses((prev) => ({ ...prev, date: e.target.value }))
                }
                required 
                />
            <button type="submit">Add Expenses</button>
            <button type="button" onClick={onRequestClose}>Close</button>
        </form>
        </Modal>
    )
}

export default ExpensesModal;