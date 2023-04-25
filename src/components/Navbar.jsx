// Navbar for the Travel Journal, functions as mostly a header for the app
import React from "react"
import earthImg from "../assets/earth-asia-solid.svg"
import "../styles.css"

function Navbar() {
    return (
        <header>
            <nav>
                <div className="nav--logo">
                    <img
                        className="nav--logo-icon"
                        src={earthImg}
                        alt="An icon of the Earth from FontAwesome"
                    />
                    <h1 className="nav--title">TRAVEL JOURNAL</h1>
                </div>
            </nav>
        </header>
    )
}

export default Navbar

