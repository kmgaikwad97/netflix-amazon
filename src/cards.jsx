import React from 'react'
import Img from "./images"
import Heading from "./Heading"

function Card(props) {
    // console.log(props);
    return (
        <>
            <div className="cards">
                <div className="card">

                    <Img imgsrc={props.imgsrc} />
                    <div className="card__info">
                        <span className="card__category">{props.title}</span>

                        <Heading sName={props.sName} />

                        <a href={props.link} target="_blank">
                            <button> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
