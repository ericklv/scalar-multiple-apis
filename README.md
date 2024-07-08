# Scalar Multiple APIs
Simple landing to show all your OpenAPI files powered by Scalar API Reference.

![App Platorm](https://i.imgur.com/dwFzQgS.png)

## Customize
In the `src/config` folder you can customize the json files.
- `apis.json` : Add all your OpenAPI/Swagger files.
- `company.json` : Customize with your info.
- `ts-particles/*.json` : Add your own JSON file with config for ts-particles animation or use `default.json`. Check in company.json if ts-particles is enabled.

To load custom animation config edit `src/components/ts_particles.tsx`
```tsx
import { default_ as config } from '../config/ts-particles';

const ParticlesBg = () => { 
    //...
}
```

## Run locally
1. Install node v18.18.0 or superior.
2. In root directory, run the following commands:

```shell
npm install
npm run dev
```

## Packages

### Scalar API Reference
Generate interactive API Docs from OpenAPI/Swagger documents.
- [@scalar/api-reference-react](https://github.com/scalar/scalar)

### TS Particles
A lightweight TypeScript library for creating particles compatible with React, Vue, Angular and others.

- [@tsparticles/react](https://github.com/tsparticles/react/#readme) React + TS
- [@tsparticles/engine](https://github.com/tsparticles/tsparticles) No framework
- [Animations presets](https://particles.js.org/samples/presets/index.html) Examples
- [Mateo Bruno Codepen](https://codepen.io/collection/DPOage?cursor=eyJwYWdlIjoxfQ==) Examples with preview

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
