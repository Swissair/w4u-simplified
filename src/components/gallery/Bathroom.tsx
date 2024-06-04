import SiteSection from "../common/SiteSection";

const Bathroom = () => {
  return (
    <SiteSection>
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
    </SiteSection>
  );
};

export default Bathroom;
