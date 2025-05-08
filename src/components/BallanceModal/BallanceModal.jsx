import React from "react";
import Modal from "react-modal";

function BallanceModal({onRequestClose, balance, setBalance, handleAddBalance }) {
    return(
        <Modal 
            isOpen
            onRequestClose={onRequestClose}
            contentLabel="Add Balance"
        >
            <h2>Add Balance</h2>
            <input type="number" placeholder="Enter amount" value={balance} onChange={(e) => setBalance(parseFloat(e.target.value) || 0)} />
            <button type="button" onClick={handleAddBalance}>Add Balance</button>
            <button type="button" onClick={onRequestClose}>Close</button>
        </Modal>
    )
}

export default BallanceModal;