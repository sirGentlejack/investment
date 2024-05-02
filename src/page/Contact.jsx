import contactUs from "../images/contactUs.jpg"

export default function Contact() {
  return (
    <div className="contact mb-5 ">
      <h1 className="text-center my-4">We’re Here To Help</h1>
      <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center">
        <img src={contactUs} className="contact-img mb-3"  alt="" />
        <form>
          <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
              <strong >First Name and Last Name </strong>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputName"
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              <strong>Email address</strong>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputMessage" className="form-label">
             <strong> Your Message</strong>
            </label>
            <textarea
              type="textarea"
              className="form-control"
              id="exampleInputMessage"
            />
          </div>
          <div id="infoHelp" className="form-text">
              We will never share your information with anyone else.
            </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
