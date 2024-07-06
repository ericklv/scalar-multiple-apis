import sc from './../assets/sad_company.webp'
import { Link } from 'react-router-dom'
import ParticlesBg from './../components/ts_particles';
import './../App.css'
import { apis, company as co } from './../docs';

function Home() {

  const mailTo = (email: string, type: string) => {
    let subject = 'Need additional info about ' + (type == 'it' ? 'API' : 'product');
    return 'mailto:' + email + '?Subject=' + subject;
  }

  const logo_ = (logo: string) => !!logo ? logo : sc

  return (
    <>
      <ParticlesBg />
      <div className='home'>
        <div>
          <a href={co.website} target='_blank'>
            <img src={logo_(co.logo)} className='logo border-sc' alt='React logo' />
          </a>
        </div>
        <h1>{co.title}</h1>
        <p>a documentation of {co.name} APis</p>
        <p>{co.about}</p>
        <div className='docs-list'>
          {apis && apis.map(({ name, page, id }) => (
            <Link key={id} to={page}>
              <div className='docs-card'>
                <p className='white-text'>{name} ➡️</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='social'>
        <hr />
        <p>Need help with API? <a href={mailTo(co['ti-mail'], 'it')}>Contact Support</a></p>
        <p>Questions about product? <a href={mailTo(co['sales-mail'], 'sales')}>Contact Sales</a></p>
      </div>
      <div className='footer'>
        <p className='white-text'>
          Made with love 🩸
        </p>
      </div>
    </>
  )
}

export default Home