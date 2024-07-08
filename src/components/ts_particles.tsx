import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { loadFull } from "tsparticles";;
import { company as co } from '../config'
import { amongus2 as config } from '../config/ts-particles'

const ParticlesBg = () => {
    useEffect(() => {
        if (co["ts-particles"]) {
            initParticlesEngine(async (engine) => { await loadFull(engine); });
        }
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: any = useMemo(() => (config), [],);

    return (co["ts-particles"]) ?
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
        /> : <></>;
};

export default ParticlesBg;