import SiteSection from "../common/SiteSection";

const Balcony = () => {
  return (
    <SiteSection>
      <div className="col-lg-6">
        <img src="images/img_balcony.jpg" alt="Image" className="img-fluid" />
      </div>
      <div className="col-lg-6">
        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
          <h2 className="mb-5">Balkon</h2>
          <p>
            Przestronny balkon z widokiem na brzozowy las i częściowym widokiem
            na jezioro Jamno.
          </p>
          <p> Rozkoszuj się kawą i lekturą słuchając śpiewu ptaków.</p>
        </div>
      </div>
    </SiteSection>
  );
};

export default Balcony;
