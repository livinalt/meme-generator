import React from "react"
import header_image from "../images/troll-face.png" 

export default function Header() {
    return (
        <header className="header">
            <img 
                src= {header_image}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project</h4>
        </header>
    )
}