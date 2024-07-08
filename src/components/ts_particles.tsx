import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import {company as co} from '../config'
import {amongus2 as config} from '../config/ts-particles'

const ParticlesBg = () => {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {});
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: any = useMemo(
        () => (config),
        [],
    );

    if (co["ts-particles"]) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};

export default ParticlesBg;