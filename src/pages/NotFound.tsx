import { useNavigate } from "react-router-dom";
import { ParticlesBg } from './../components';

function NotFound() {

  const navi = useNavigate();
  const go_home = () => navi('/', { replace: true })

  return (
    <>
      <ParticlesBg />
      <div className="home">
        <div style={{ "margin": "auto" }}>
          <h1 className='border-sc docs-text'>¯\_(ツ)_/¯ </h1>
        </div>
        <h1>Not Found </h1>
        <div className='btn-home' onClick={go_home}>Back to home</div>
      </div>
    </>
  )
}

export default NotFound