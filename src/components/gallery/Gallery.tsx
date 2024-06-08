import Balcony from "./Balcony";
import Bathroom from "./Bathroom";
import Kitchen from "./Kitchen";
import ParkingLot from "./ParkingLot";
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

      <Kitchen />

      <Bathroom />

      <Balcony />

      {/* <RoofTarace /> */}

      <ParkingLot />
    </>
  );
};

export default Gallery;
