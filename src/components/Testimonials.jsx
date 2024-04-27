import PropTypes from 'prop-types';

// Testimonials component

const Testimonials = ({testimonials}) => {
  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials available.</div>;
  }

  return (
    <div className="container mt-5 bg-light">
      <h2 className="text-center mb-4">Testimonials</h2>
      <div className="row">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">{testimonial.comment}</p>
              </div>
              <div className="card-footer bg-white border-0">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={`./src/images/${testimonial.coverImg}`}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h5 className="card-title mb-0">{testimonial.name}</h5>
                    <p className="card-text text-muted">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// Define prop types for Testimonials component
Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Testimonials;
