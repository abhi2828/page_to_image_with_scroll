import React from 'react';

const Technology = (props) => {
    return (
        <>
            <figure className="Technology">
                <img className="svg" src={props.img} alt={props.title} />
            </figure>
        </>
    );
}
export default Technology

