import React,{useState} from "react";
import Modal from "react-modal";

const categories = ["Food", "Travel", "Shopping", "Other"];

function ExpensesModal({ onRequestClose, setExpenses, handleAddExpenses }) {
    
    const [expense, setExpense] = useState({
        title: "",
        amount: "",
        category: "",
        date: "",
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate inputs
        if (!expense.title || !expense.amount || !expense.category || !expense.date) {
          alert("Please fill in all fields.");
          return;
        }
    
        handleAddExpenses(expense); // Pass the expense to the parent handler
        setExpense({ title: "", amount: "", category: "", date: "" }); // Clear the form
      };
    
    return(
        <Modal 
            isOpen
            onRequestClose={onRequestClose}
            contentLabel="Add Expenses"
        >
        <form onSubmit={handleSubmit}>
            <h2>Add Expenses</h2>
            <input type="text" name="title" placeholder="Title" value={expense.title}  onChange={(e) =>
                setExpenses((prev) => ({ ...prev, title: e.target.value }))}
                required
            />
            <input 
                type="number" 
                name="Price" 
                placeholder="Price"   
                value={expense.amount}
                onChange={(e) =>
                    setExpenses((prev) => ({ ...prev, amount: e.target.value }))
                }
                required
                />
            <select name="category" placeholder="Category" value={expense.category || ""} onChange={(e) => setExpenses((prev) => ({ ...prev, category: e.target.value }))} required>
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