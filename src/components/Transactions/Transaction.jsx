import React from "react";

function Transactions({data}){

    const handleImg = () => {
        if(data.category === "food"){
            return '../../assets/food.svg';
        }
        else if(data.category === "transport"){
            return '../../assets/travel.svg';
        }
        else{
            return '../../assets/entertainment.svg';
        }
    }

    return(
        <div>
            <div>
                <img src={handleImg} alt={data.category} />
            </div>
            <div>
                <p>{data.title}</p>
                <p>{data.date}</p>
            </div>
            <div>
                <p>{data.price}</p>
                <img src='../../assets/delete.svg' alt="delete" />
                <img src='../../assets/edit.svg' alt="edit" />
            </div>
        </div>
    )
}

export default Transactions;