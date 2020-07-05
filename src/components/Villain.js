import React, { useState } from "react";
//Styles
import styles from "../styles";
import { HeroImage } from "../styles"


const Villain = (props) => {
    return (
        <div>
            <HeroImage>
                <img src="https://i.pinimg.com/originals/91/89/ae/9189aeca9836550216d986dd0cbab062.jpg" alt="Enemy" />
                <p>{props.health + "/5000(HeathPoints)"}</p>
            </HeroImage>
        </div>
    );
};


export default Villain;