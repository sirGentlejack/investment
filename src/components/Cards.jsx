import moneyImg from "../images/moneyImg.jpg";

function Cards() {
  return (
    <div className="bg-light">
      <h3 className="text-center my-3">Investment plan</h3>
      <div className="d-md-flex justify-content-around align-items-center my-4 d-block ms-4 ">
        
          <div className="card my-3" style={{ width: "18rem" }}>
            <img src={moneyImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
       
        
          <div className="card my-3" style={{ width: "18rem" }}>
            <img src={moneyImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        
        
          <div className="card my3" style={{ width: "18rem" }}>
            <img src={moneyImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
       
      </div>
    </div>
  );
}
export default Cards;
