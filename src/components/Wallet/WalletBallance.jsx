import React from "react";
import styles from "./Wallet.module.css";
function WalletBalance({ balance,openModal }) {

  const formattedBalance = typeof balance === 'number' 
    ? balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    : "$0.00";

   return ( <div>
      <h2>Wallet Balance: <span className={styles.balance}>{formattedBalance}</span></h2>
      <button
        type="button"
        onClick={openModal}
      className={styles.addButton}
      >
        + Add Income
      </button>
      </div>)
}

export default WalletBalance;
