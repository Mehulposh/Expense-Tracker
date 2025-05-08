import React from "react";
import Modal from "react-modal";

function BallanceModal({isOpen,onClose,amount,setAmountToAdd, handleAddBalance }) {
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Add Balance"
        >
            <h2>Add Balance</h2>
            <input 
                type="number" 
                placeholder="Enter amount" 
                value={amount} 
                onChange={(e) => {
                    // Ensure we're setting a number or empty string
                    const value = e.target.value;
                    setAmountToAdd(value === '' ? '' : Number(value));
                }} 
            />
            <button type="button" onClick={handleAddBalance}>Add Balance</button>
            <button type="button" onClick={onClose}>Close</button>
        </Modal>
    )
}

export default BallanceModal;