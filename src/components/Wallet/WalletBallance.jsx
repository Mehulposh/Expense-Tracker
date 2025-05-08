import React from "react";

function WalletBalance({ balance,openModal }) {
   return ( <div>
      <h2>Wallet Balance: ${balance}</h2>
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
