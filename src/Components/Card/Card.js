import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props)
    return (
        <div className="d-inline-flex p-2">
            <div className="card">
                <div className="cardTitle">
                    title 
                </div>
                <div className="cardBody"></div>


            </div>
        </div>
    );
};

export default Card;