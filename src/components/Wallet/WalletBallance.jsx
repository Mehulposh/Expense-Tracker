import React from "react";

function WalletBalance({ balance,onAddIncome }) {
   return ( <div>
      <h2>Wallet Balance: ${balance.toFixed(2)}</h2>
      <button
        type="button"
        onClick={onAddIncome}
        style={{ marginRight: "10px", padding: "10px 20px", cursor: "pointer" }}
      >
        + Add Income
      </button>
      </div>)
}

export default WalletBalance;
