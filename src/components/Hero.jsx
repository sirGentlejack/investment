import investmentHeroImg from "../images/investmentHeroImg2.jpg";

function Hero() {
  return (
    <div className="hero mt-5 d-flex justify-content-around align-items-center text-light">
      <div className="hero-text">
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
          ex.
        </h1>
        <p className="m-t-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quae perferendis accusantium ad consectetur voluptate rerum. Quod,
          maiores officia consequatur vitae vel id dicta assumenda rem, totam,
          culpa sunt perspiciatis itaque debitis facilis quia in ducimus
          exercitationem laboriosam dolorum qui. Quo, cum! Excepturi, maxime
          error repudiandae itaque eveniet possimus dolor.
        </p>
        <div className="d-flex  ">
        <button type="button" className="btn btn-light ">Get Started</button>
        <button type="button" className="btn btn-outline-light mx-4">Login</button>
        </div>
      </div>
      <div>
        <img
          src={investmentHeroImg}
          alt=""
          className="hero-img img-fluid rounded-circle d-none d-md-block opacity-75"
        />
      </div>
    </div>
  );
}

export default Hero;
