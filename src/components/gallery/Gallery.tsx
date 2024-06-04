import Balcony from "./Balcony";
import Bathroom from "./Bathroom";
import Kitchen from "./Kitchen";
import ParkingLot from "./ParkingLot";
import RoofTarace from "./RoofTarace";
import RoomPanorama from "./RoomPanorama";

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

      <RoomPanorama />

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

      <Kitchen />

      <Bathroom />

      <Balcony />

      {/* <RoofTarace /> */}

      <ParkingLot />
    </>
  );
};

export default Gallery;
