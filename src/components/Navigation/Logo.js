import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <div className="ma4 mt0 center">
            <Tilt className="Tilt br2 shadow-2" options={{
                tiltMaxAngleX:60,
                tiltMaxAngleY:60
            }}
            style={{ height: 120, width: 120}}>
                <div style={{ paddingTop: '15px'}}>
                    <img alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;