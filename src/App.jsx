import React,{useState} from "react";
import Header from "./components/Header/Header";
import Balance from "./components/Wallet/WalletBallance";
import Expenses from "./components/Expenses/Expenses";
import ExpensesModal from "./components/ExpensesModal/ExpensesModal";
import BallanceModal from "./components/BallanceModal/BallanceModal";

function App() {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [balacnceModalOpen, setBalanceModalOpen] = useState(false);
  const [expenseModalOpen, setExpenseModalOpen] = useState(false);
  
  const [expenses, setExpenses] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleAddBalance = () => {
    setWalletBalance((prev) => prev + parseInt(expenses.amount));
    setBalanceModalOpen(false);
  };
  const handleAddExpenses = () => {
    const expenseAmount = parseFloat(expenses.amount || 0);
    if (expenseAmount > walletBalance) {
      alert("Insufficient wallet balance!");
      return;
    }
    setWalletBalance((prev) => prev - expenseAmount);
    setExpenses({ title: "", amount: "", category: "", date: "" });
    setExpenseModalOpen(false);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div>
      <Header/>
      <Balance
        balance={walletBalance}
        openModal={() => setBalanceModalOpen(true)}
      />
      {balacnceModalOpen && (
        <BallanceModal
          
          onRequestClose={() => setBalanceModalOpen(false)}
          balance={walletBalance}
          setBalance={setWalletBalance}
          handleAddBalance={handleAddBalance}
        />
      )}

      <Expenses 
        onAddExpense={() => setExpenseModalOpen(true)}
        totalExpenses={totalExpenses}
      />
       {expenseModalOpen && (
        <ExpensesModal
          
          onRequestClose={() => setExpenseModalOpen(false)}
          expense={expenses}
          setExpenses={setExpenses}
          handleAddExpenses={handleAddExpenses}
        />
      )}
    </div>
  )


}


export default App;