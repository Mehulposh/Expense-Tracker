import React from "react";
import Transaction from '../Transactions/Transaction';
import styles from './TransactionList.module.css';


function TransactionList({expenses}){
    return (
        <>
        <h2>Recent Transactions</h2>
        <div className={styles.transactionList}>

            {expenses? (expenses.map((transaction) => (
                    <>
                    <Transaction key={transaction.id} data={transaction} />
                    <hr/>
                    </>
                ))) : (<p>No transactions!</p>)}
     
        </div>
        </>
    )
}

export default TransactionList;