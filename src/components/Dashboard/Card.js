import React from 'react'

function Card(props) {
    return (
        <div className="card d-flex justify-content-center align-items-center" style={{ width: "250px", height: "200px", margin: "20px" }}>
            <h3> {props.name}</h3>
        </div>
    )
}

export default Card
