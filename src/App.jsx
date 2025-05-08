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

  const [expense, setExpenses] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleAddBalance = () => {
    setWalletBalance((prev) => prev + parseInt(expense.amount));
    setBalanceModalOpen(false);
  };
  const handleAddExpenses = () => {
    const expenseAmount = parseFloat(expense.amount || 0);
    if (expenseAmount > walletBalance) {
      alert("Insufficient wallet balance!");
      return;
    }
    setWalletBalance((prev) => prev - expenseAmount);
    setExpenses({ title: "", amount: "", category: "", date: "" });
    setExpenseModalOpen(false);
  };

  return (
    <div>
      <Header/>
      <Balance
        balance={walletBalance}
        onAddIncome={handleAddBalance}
      />
    </div>
  )


}


export default App;