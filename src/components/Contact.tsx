import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import StaySelector from "./StaySelector";
import { useForm } from "react-hook-form";
import apiClient from "../services/apiClient";
import { Enquiry } from "../models/Domain";

const Contact = () => {
  const {
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: Enquiry) => {
    try {
      await apiClient.post("reservation/enquire", data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <>
      <div
        className="site-blocks-cover inner-page-cover overlay"
        style={{
          backgroundImage: `url("/images/hero_bg_boats_1b.jpg?url")`,
        }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-7 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="text-white">Skontaktuj się</h1>
              <p>Sprawdź dostępność apartamentu i zarezerwuj pobyt</p>
            </div>
          </div>
        </div>
      </div>

      <StaySelector setValue={setValue} />

      <div className="site-section-sm border-bottom">
        <div className="container">
          <div className="row">
            <div className="p-4 bg-white">
              <h3 className="h5 text-black mb-3">Dane kontaktowe</h3>
            </div>
          </div>
          <div className="row">
            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold text-black">Adres</p>
              <p className="mb-4 text-black">Wakacje 4U Piotr Skirski</p>
            </div>

            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold text-black">Telefon</p>
              <p className="mb-4">(+48) 788795764</p>
            </div>

            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold text-black">Email</p>
              <p className="mb-0">
                <a
                  href="mailto:wakacje4u@gmail.com?subject=Rezerwacja apartamentu w Unieściu&body=Jestem zainteresowany wynajęciem apartamentu w terminie od ... do ..."
                  title="Rezerwacja apartamentu w Unieściu"
                >
                  wakacje4u@gmail.com
                </a>
              </p>
            </div>

            {/* <p className="mb-0 font-weight-bold text-black">Telefon</p>
              <p className="mb-4">
                <a>(+48) 788795764</a>
              </p>

              <p className="mb-0 font-weight-bold text-black">Email</p>
              <p className="mb-0">
                <a
                  href="mailto:wakacje4u@gmail.com?subject=Rezerwacja apartamentu w Unieściu&body=Jestem zainteresowany wynajęciem apartamentu w terminie od ... do ..."
                  title="Rezerwacja apartamentu w Unieściu"
                >
                  wakacje4u@gmail.com
                </a>
              </p>
            </div> */}
            {/* <div className="p-4 mb-3 bg-white">
              <h3 className="h5 text-black mb-3">Dane kontaktowe</h3>
              <p className="mb-0 font-weight-bold text-black">Adres</p>
              <p className="mb-4 text-black">Wakacje 4U Piotr Skirski</p>

              <p className="mb-0 font-weight-bold text-black">Telefon</p>
              <p className="mb-4">
                <a href="#">(+48) 788795764</a>
              </p>

              <p className="mb-0 font-weight-bold text-black">Email</p>
              <p className="mb-0">
                <a href="mailto:wakacje4u@gmail.com">wakacje4u@gmail.com</a>
              </p>
            </div> */}
          </div>

          {/* <div className="row">
            <div className="col-md-12 col-lg-7 mb-5">
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold" htmlFor="fullname">
                      Imię i Nazwisko
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      className="form-control"
                      placeholder="Imię i Nazwisko"
                      {...register("fullname", { required: true })}
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Adres email"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format",
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="subject">
                      Tytuł
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="form-control"
                      placeholder="Tytuł"
                      {...register("subject", { required: true })}
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="message">
                      Wiadomość
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={5}
                      className="form-control"
                      placeholder="Jestem zainteresowany pobytem od ... do ..."
                      {...register("message", {
                        required: true,
                      })}
                    ></textarea>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="Wyślij wiadomość"
                      className="btn btn-primary py-3 px-4"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-4 ml-auto">
              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3">Dane kontaktowe</h3>
                <p className="mb-0 font-weight-bold text-black">Adres</p>
                <p className="mb-4 text-black">Wakacje 4U Piotr Skirski</p>

                <p className="mb-0 font-weight-bold text-black">Telefon</p>
                <p className="mb-4">
                  <a href="#">(+48) 788795764</a>
                </p>

                <p className="mb-0 font-weight-bold text-black">Email</p>
                <p className="mb-0">
                  <a href="mailto:wakacje4u@gmail.com">wakacje4u@gmail.com</a>
                </p>
              </div>

              <div className="p-4 mb-3 bg-white">
                <h3 className="h5 text-black mb-3 text-black">
                  Informacje dodatkowe
                </h3>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                  ad iure porro mollitia architecto hic consequuntur. Distinctio
                  nisi perferendis dolore, ipsa consectetur
                </p>
                <p>
                  <a href="#" className="btn btn-primary  py-2 px-4">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
