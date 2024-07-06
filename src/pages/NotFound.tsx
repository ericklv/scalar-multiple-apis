import { useNavigate } from "react-router-dom";
import ParticlesBg from './../components/ts_particles';
import './../App.css'

function NotFound() {

  const navi = useNavigate();
  const go_home = () => navi('/', { replace: true })

  return (
    <>
    <ParticlesBg />
    <div className='home'>
      <div style={{"margin":"auto"}}>
        <h1 className='border-sc docs-text'>¯\_(ツ)_/¯ </h1>
      </div>
      <h1>Not Found </h1>

      <button className='btn-home' onClick={_ => go_home()}>Back to home</button>
    </div>
    </>
  )
}

export default NotFound