import { useForm } from "react-hook-form";
import { Enquiry } from "../models/Domain";
import apiClient from "../services/apiClient";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: Enquiry) => {
    try {
      await apiClient.post("reservation/enquire", {
        ...data,
        dateRange: {
          startDate: "2024-05-25T21:24:03.353Z",
          endDate: "2024-05-25T21:24:03.353Z",
          key: "selection",
        },
      });
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
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
  );
};

export default ContactForm;
