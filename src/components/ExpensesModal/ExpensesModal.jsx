import React,{useState,useEffect} from "react";
import Modal from "react-modal";
import styles from './ExpensesModal.module.css';
const categories = ["Food", "Travel", "Shopping", "Other"];

function ExpensesModal({ isOpen, onClose, onAddExpense, expenseToEdit  }) {
    
    const [formData, setFormData] = useState({
        title: '',
        price: '',
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
        if (!formData.title || !formData.price || !formData.date) {
          // Show validation error
          return;
        }
        
        // Create expense object with proper data types
        const expense = {
          id: expenseToEdit ? expenseToEdit.id : Date.now().toString(),
          title: formData.title,
          price: Number(formData.price), // Convert to number
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
            className={styles.expensesModal}
        >
        <form onSubmit={handleSubmit}>
            <h2 className={styles.heading}>Add Expenses</h2>
            <input type="text" name="title" placeholder="Title" value={formData.title}  onChange={handleChange}
                required className={styles.titleInput}
            />
            <input 
                type="number" 
                name="price" 
                placeholder="Price"   
                value={formData.price}
                onChange={handleChange}
                className={styles.priceInput}
                required
                />
            <select name="category" placeholder="Category" value={formData.category || ""} onChange={handleChange} className={styles.categoryInput} required>
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
                className={styles.dateInput}
                required 
                />
            <button type="submit" className={styles.addExpenses}>Add Expenses</button>
            <button type="button" onClick={onClose} className={styles.ExpensesClose}>Close</button>
        </form>
        </Modal>
    )
}

export default ExpensesModal;