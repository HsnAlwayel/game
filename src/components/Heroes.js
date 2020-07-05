import React, { useState } from "react";
//Styles
import styles from "../styles";
import { HeroImage } from "../styles"


const Heroes = () => {
    let [currentHero, setCurrentHero] = useState("ironman");
    const toggleHero = () => {
        setCurrentHero(currentHero === "ironman" ? "thor" : "ironman")
        console.log(currentHero)
    }

    const hero = {
        thor: { text: "Thor", image: "https://images2.alphacoders.com/674/674055.jpg" },
        ironman: { text: "IronMan", image: "https://c4.wallpaperflare.com/wallpaper/135/532/958/iron-man-black-blue-minimalism-wallpaper-preview.jpg" }
    }
    return (
        <div>
            <HeroImage>
                <img alt={hero[currentHero].text} src={hero[currentHero].image} />
                <h5> {hero[currentHero].text}</h5>
            </HeroImage>
            <button onClick={toggleHero}>Hero</button>
        </div>
    );
};


export default Heroes;