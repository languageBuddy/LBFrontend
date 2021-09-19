import React, { useState } from 'react'
import Card from './Card'
function Content() {
    const [state, setstate] = useState([
        { id: 1, name: "one" },
        { id: 2, name: "two" },
        { id: 3, name: "three" },
        { id: 4, name: "four" },
        { id: 5, name: "five" },
        { id: 6, name: "six" },
        { id: 7, name: "seven" },
        { id: 8, name: "eight" }
    ]);

    return (
        <div className="d-flex flex-wrap overflow-scroll" style={{ margin: "5px ", padding: "50px", overflow: "hidden" }}>
            {
                state.map(card => {
                    return (
                        <Card id={card.id} {...card} />
                    );
                })
            }
        </div>
    )
}

export default Content
