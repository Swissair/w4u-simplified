import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="site-blocks-cover overlay"
        style={{
          backgroundImage: `url("/images/hero_bg_lake_view_1.jpg?url")`,
        }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-8 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="mb-4">
                Twoje miejsce wypoczynku nad morzem i jeziorem
              </h1>
              <p className="mb-5">Unieście, Sea & Lake, ul. Sosnowy Las 15</p>
              <p>
                <Link to="/gallery" className="btn btn-primary px-5 py-3">
                  Zdjęcia
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="featured-property-half d-flex">
          <div className="text">
            <h2>Studio apartament</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              quae obcaecati doloribus distinctio, aliquam vero? Molestias,
              amet, eveniet.
            </p>
            <ul className="property-list-details mb-5">
              <li className="text-black">
                Property Name:{" "}
                <strong className="text-black">Marga Luxury Suite</strong>
              </li>
              <li>
                Room: <strong>2</strong>
              </li>
              <li>
                Total Area: <strong>482 Square Feets</strong>
              </li>
              <li>
                Category: <strong>Modern House</strong>
              </li>
              <li>
                Lunch Date: Jan 20, 2019<strong></strong>
              </li>
            </ul>
            <p>
              <a href="#" className="btn btn-primary px-4 py-3">
                Get Details
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary" data-aos="fade">
        <div className="container">
          <div className="row">
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-facebook text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-twitter text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-instagram text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-linkedin text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-pinterest text-white"></span>
            </a>
            <a href="#" className="col-2 text-center py-4 social-icon d-block">
              <span className="icon-youtube text-white"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
