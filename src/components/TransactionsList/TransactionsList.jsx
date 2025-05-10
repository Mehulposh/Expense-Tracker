import React from "react";
import Transaction from '../Transactions/Transaction';
import styles from './TransactionList.module.css';


function TransactionList({expenses}){
    return (
        <div>
        <h2>Recent Transactions</h2>
        <div className={styles.transactionList}>

            {expenses.length>0? (expenses.map((transaction) => (
                    <>
                    <Transaction key={transaction.id} data={transaction} />
                    <hr/>
                    </>
                ))) : (<p>No transactions!</p>)}
     
        </div>
        </div>
    )
}

export default TransactionList;