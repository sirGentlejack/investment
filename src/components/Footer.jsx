export default function Footer() {
  return (
    <div className="d-md-flex">
        <div>
            <h4>Navigation</h4>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Investment plan</li>
                <li>Create an Account</li>
            </ul>
        </div>
      <div>
        <h4>Contact information</h4>
        <p>
          <strong>Address:</strong> 8, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Autem, suscipit.
        </p>
        <p>
          <strong>Phone:</strong> 0123456789
        </p>
        <p>
          <strong>Email:</strong>Lorem2024@lorem.com
        </p>
      </div>
      <div>
        <form>
          <div className="text-center">
            <h4>NewsLetter</h4>
            <p>Stay Updated!</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We will never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Update on the CryptoMarket daily
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
