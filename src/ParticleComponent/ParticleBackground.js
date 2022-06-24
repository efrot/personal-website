import React from 'react';
import particlesConfig from './particle-config';
import Particles from 'react-particles-js';
import './particle-style.css';

const ParticleBackground = (props) => {
    return(
        <div>
        {props.childrem}
        <Particles params={particlesConfig} id="particle-style"></Particles>
        </div>
    );
}

export default ParticleBackground;