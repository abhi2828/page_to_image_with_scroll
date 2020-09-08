import React from 'react';

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="padding">
                    <div className="card">
                        <div className="heading">
                            <figure>
                                <img className="cardImg" src={props.img} alt={props.title} />
                            </figure>
                            <div className="cardContent">
                                <h4> {props.title} </h4>
                                <p className="AboutPokemon"> {props.about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 
export default Card

