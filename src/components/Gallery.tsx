const Gallery = () => {
  return (
    <>
      <div
        className="site-blocks-cover inner-page-cover overlay"
        // style="background-image: url('images/hero_bg_builiding_view_1.jpg');"
        style={{
          backgroundImage: `url("/images/hero_bg_builiding_view_1.jpg?url")`,
        }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
        // data-aos="fade"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-7 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="text-white">Galeria</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                src="images/img_room_panorama.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="images/img_kitchen.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                <h2 className="mb-5">Kuchnia</h2>
                <p>
                  Funkjonalna kuchnia wyposażona w płytę indukcyjną oraz
                  zmywarkę i lodówkę w zabudowie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="images/img_bathroom_1.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                <h2 className="mb-5">Łazienka</h2>
                <p>
                  Nowoczesna kuchnia wyposażona w płytę indukcyjną oraz zmywarkę
                  i lodówkę w zabudowie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="images/img_bathroom_shower.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>

            <div className="col-lg-6">
              <img
                src="images/img_bathroom_shower_2.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="images/img_balcony.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                  <h2 className="mb-5">Balkon</h2>
                  <p>
                    Przestronny balkon z widokiem na brzozowy las i częściowym
                    widokiem na jezioro Jamno.
                  </p>
                  <p> Rozkoszuj się kawą i lekturą słuchając śpiewu ptaków.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="images/img_roof_view.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                  <h2 className="mb-5">Taras dachowy z basenem</h2>
                  <p>
                    Na dachu znajduje się ogromny taras z widokiem na jezioro
                    Jamno.
                  </p>
                  <p>
                    {" "}
                    W sezonie letnim otwarty jest basen, z którego rozpościera
                    się widok na jezioro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src="images/img_roof_view.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                src="images/img_immersive_swimming_pool.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="images/img_parking_space.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                <h2 className="mb-5">Miejsce parkingowe</h2>
                <p>Do apartamentu przynależy miejsce parkingowe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
