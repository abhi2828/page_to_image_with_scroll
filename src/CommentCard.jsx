import React from 'react';

function CommentCard(props) {
    return (
        <>
            <div className="CommentComponent">
                <div className="padding">
                    <div className="card2">
                        <div className="heading">
                            <div className="cardContent2">
                                <p className="CommentCard">
                                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                                      {props.comment} 
                                    <i class="fa fa-quote-right" aria-hidden="true"></i>
                                </p>
                                <p className="CustomerName">{props.name}</p>
                                <p className="CustomerPost"> {props.post}</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CommentCard
