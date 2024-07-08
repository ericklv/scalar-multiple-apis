import sc from "./../assets/sad_company.webp";
import { Link } from "react-router-dom";
import { apis, company as co } from "../config";
import { APIInfo, Footer, ParticlesBg } from "../components";

function Home() {
  const logo_ = (logo: string) => (logo ? logo : sc);

  return (
    <>
      <ParticlesBg />
      <div className="home">
        <div>
          <a href={co.website} target="_blank">
            <img
              src={logo_(co.logo)}
              className="logo"
              alt="React logo"
            />
          </a>
        </div>
        <h1>{co.title}</h1>
        <p>a documentation of {co.name} APis</p>
        <p>{co.about}</p>
        <div className="docs-list">
          {apis &&
            apis.map(({ name, page, id, yaml }) => (
              <Link key={id} to={page}>
                <div className="card">
                  <p className="white-text"> {name}</p>
                  <APIInfo url={yaml} />
                  <div className="card-corner">
                    <div className="card-arrow">
                      →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <Footer co={co} />
    </>
  );
}

export default Home;
