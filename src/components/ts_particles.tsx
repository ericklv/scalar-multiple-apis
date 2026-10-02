import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { type Engine, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { company as co } from '../config';
import { bounce as config } from '../config/ts-particles';

// must be stable across renders, ParticlesProvider throws if it changes
const init = async (engine: Engine) => { await loadFull(engine); };

const ParticlesBg = () => {
    const options = useMemo(() => (config as ISourceOptions), []);

    return (co["ts-particles"]) ?
        <ParticlesProvider init={init}>
            <Particles
                id="tsparticles"
                options={options}
            />
        </ParticlesProvider> : <></>;
};

export default ParticlesBg;
