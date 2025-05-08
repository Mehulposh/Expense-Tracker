import React from "react";

function WalletBalance({ balance,openModal }) {

  const formattedBalance = typeof balance === 'number' 
    ? balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    : "$0.00";

   return ( <div>
      <h2>Wallet Balance: {formattedBalance}</h2>
      <button
        type="button"
        onClick={openModal}
        style={{ marginRight: "10px", padding: "10px 20px", cursor: "pointer" }}
      >
        + Add Income
      </button>
      </div>)
}

export default WalletBalance;
