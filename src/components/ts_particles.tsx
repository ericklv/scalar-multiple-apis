import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { company as co } from '../config';
import { polygon as config } from '../config/ts-particles';

const ParticlesBg = () => {
    useEffect(() => {
        if (co["ts-particles"]) {
            initParticlesEngine(async (engine) => { await loadFull(engine); });
        }
    }, []);

    const particlesLoaded = async (c?: Container): Promise<void> => {c};

    const options: any = useMemo(() => (config), [],);

    return (co["ts-particles"]) ?
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
        /> : <></>;
};

export default ParticlesBg;