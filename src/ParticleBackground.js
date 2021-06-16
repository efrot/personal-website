import React from 'react';
import particlesConfig from './config/particle-config';
import Particles from 'react-particles-js';

const ParticleBackground = () => {
    return(
        <Particles params={particlesConfig}></Particles>
    );
}

export default ParticleBackground;