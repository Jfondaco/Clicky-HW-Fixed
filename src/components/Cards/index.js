import React from 'react';

function cards(props){
    return(
        <div>
            {/* card */}
            
                <div className="col s4">
                <div className="card">
                    <div id={props.id} className="card-image">
                        {/* need to pass my onClick check guessed function here, but when passing it as a prop its saying my function is undefined */}
                        <img src={props.img} id = {props.id} onClick={props.onClick} alt ="dog"></img>
                    </div>  
                </div>
                </div>
            
        </div>
    )
}

export default cards