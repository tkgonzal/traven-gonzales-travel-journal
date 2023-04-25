// Denotes the component for entries in the Travel Journal
import React from "react"
import locationIcon from "../assets/location-dot.svg"

function Entry(props) {
    return (
        <section className="entry">
            <img
                className="entry--img"
                src={props.item.img.src}
                alt={props.item.img.alt}
            />

            <div className="entry--info">
                <span className="entry--meta">
                    <img
                        className="entry--location-icon"
                        src={locationIcon}
                        alt="A location dot icon from FontAwesome"
                    />
                    <h3 className="entry--country">{props.item.country.toUpperCase()}</h3>
                    <a
                        className="entry--location-link"
                        href={props.item.link}
                        target="_blank">
                        View Map
                    </a>
                </span>

                <h2 className="entry--location">{props.item.location.toUpperCase()}</h2>
                <small className="entry--date">{props.item.date}</small>
                <p className="entry--description">
                    {props.item.description}
                </p>
            </div>
        </section>
    )
}

export default Entry

