import React,{useState,useEffect} from "react";
import Header from "./components/Header/Header";
import Balance from "./components/Wallet/WalletBallance";
import Expenses from "./components/Expenses/Expenses";
import ExpensesModal from "./components/ExpensesModal/ExpensesModal";
import BallanceModal from "./components/BallanceModal/BallanceModal";
import PieChart  from "./components/PieChart/PieChart";
import './App.css';

function App() {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [balanceModalOpen, setBalanceModalOpen] = useState(false);
  const [expenseModalOpen, setExpenseModalOpen] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [amountToAdd, setAmountToAdd] = useState('');
  
  useEffect(() => {
    // Load from localStorage if available
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      try {
        const parsedExpenses = JSON.parse(savedExpenses);
        // Validate that it's actually an array before setting state
        if (Array.isArray(parsedExpenses)) {
          setExpenses(parsedExpenses);
          
        } else {
          console.error('Saved expenses is not an array, initializing empty array');
          setExpenses([]);
        }
      } catch (error) {
        console.error('Error parsing saved expenses:', error);
        setExpenses([]);
      }
    }
  }, []);

  console.log(expenses);

  const totalAmount = Array.isArray(expenses) 
    ? expenses.reduce((total, expense) => total + Number(expense.price), 0) 
    : 0;

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('walletBalance', JSON.stringify(walletBalance-totalAmount));
  }, [expenses]);

  const handleAddBalance = (amount) => {
    const numericAmount = Number(amount);
  // Only add if it's a valid number
  if (!isNaN(numericAmount)) {
    setWalletBalance((prev) => Number(prev) + numericAmount);
  }
    setBalanceModalOpen(false);
  };


  const handleAddExpense = (expense) => {
    if (currentExpense) {
      // Update existing expense
      setExpenses(expenses.map(e => 
        e.id === expense.id ? expense : e
      ));
    } else {
      // Add new expense
      setExpenses([...expenses, expense]);
    }
    
    // Close modal and reset current expense
     setExpenseModalOpen(false);
    setCurrentExpense(null);
  };

  

  

  return (
    <>
      <Header />
    <div className="App">
      <div className="Wallet_Balance">
      <Balance
        balance={walletBalance}
        openModal={() => setBalanceModalOpen(true)}
      />
      {balanceModalOpen && (
        <BallanceModal
          isOpen={balanceModalOpen}
          onClose={() => setBalanceModalOpen(false)}
          
          amountToAdd={amountToAdd}
          setAmountToAdd={setAmountToAdd}
          handleAddBalance={handleAddBalance}
        />
      )}
      </div>

      <div className="Expenses">
      <Expenses 
        onAddExpense={() => setExpenseModalOpen(true)}
        totalExpenses={totalAmount}
      />
       {expenseModalOpen && (
        <ExpensesModal
          isOpen={expenseModalOpen}
          onClose={() => {
            setExpenseModalOpen(false);
            setCurrentExpense(null);
            }}
          onRequestClose={() => setExpenseModalOpen(false)}
          onAddExpense={handleAddExpense}
        expenseToEdit={currentExpense}
        />
      )}
      </div>
      <PieChart expenses={expenses}/>
    </div>
    </>
  )


}


export default App;