import React,{useState,useEffect} from "react";
import Modal from "react-modal";

const categories = ["Food", "Travel", "Shopping", "Other"];

function ExpensesModal({ isOpen, onClose, onAddExpense, expenseToEdit  }) {
    
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        date: '',
        category: 'other'
      });

      useEffect(() => {
        // When editing an expense, populate the form
        if (expenseToEdit) {
          setFormData({
            title: expenseToEdit.title || '',
            amount: expenseToEdit.amount || '',
            date: expenseToEdit.date || '',
            category: expenseToEdit.category || 'other'
          });
        } else {
          // Reset form for new expenses
          setFormData({
            title: '',
            amount: '',
            date: '',
            category: 'other'
          });
        }
      }, [expenseToEdit]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate data before submission
        if (!formData.title || !formData.amount || !formData.date) {
          // Show validation error
          return;
        }
        
        // Create expense object with proper data types
        const expense = {
          id: expenseToEdit ? expenseToEdit.id : Date.now().toString(),
          title: formData.title,
          amount: Number(formData.amount), // Convert to number
          date: formData.date,
          category: formData.category
        };
        
        // Add or update expense
        onAddExpense(expense);
        onClose();
      };


    
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Add Expenses"
        >
        <form onSubmit={handleSubmit}>
            <h2>Add Expenses</h2>
            <input type="text" name="title" placeholder="Title" value={formData.title}  onChange={handleChange}
                required
            />
            <input 
                type="number" 
                name="Price" 
                placeholder="Price"   
                value={formData.amount}
                onChange={handleChange}
                required
                />
            <select name="category" placeholder="Category" value={formData.category || ""} onChange={handleChange} required>
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
                value={formData.date}
                onChange={handleChange}
                required 
                />
            <button type="submit">Add Expenses</button>
            <button type="button" onClick={onClose}>Close</button>
        </form>
        </Modal>
    )
}

export default ExpensesModal;