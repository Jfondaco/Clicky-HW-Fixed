import React from 'react';

function cards(props){
    return(
        <div>
            {/* card */}
            <div className="row">
                <div className="col s4">
                <div className="card">
                    <div id={props.id} className="card-image">
                        <img src={props.img} id = {props.id}></img>
                    </div>  
                </div>
                </div>
            </div>
        </div>
    )
}

export default cards