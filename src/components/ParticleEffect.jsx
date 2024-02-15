import TSParticles from '@tsparticles/react';
import React, { useCallback } from 'react';
import { loadSlim } from "@tsparticles/slim";



const ParticleEffect = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <TSParticles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
    );
};

export default ParticleEffect;