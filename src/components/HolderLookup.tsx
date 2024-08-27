import React from "react";

const HolderLookup: React.FC = () => {
  return (
    <div className="holder-lookup-section p-4 rounded col-3" style={glassmorphismStyle}>
      <h4>Holder Search</h4>
      <p>Use the fields below to find holder information</p>

      <div id="holderCarousel" className="carousel slide">


        {/* Carousel Inner */}
        <div className="carousel-inner">
          {/* Slide 1: First Name & Last Name */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <div className="form-group w-75">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control glass-input"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="form-control glass-input"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: Tax ID */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="form-group w-75">
                <input
                  type="text"
                  className="form-control glass-input"
                  placeholder="Tax ID #"
                />
              </div>
            </div>
          </div>

          {/* Slide 3: Account Number */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="form-group w-75">
                <input
                  type="text"
                  className="form-control glass-input"
                  placeholder="Account Number"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#holderCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#holderCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      {/* Search Button */}
      <div className="d-flex justify-content-end mt-4">
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
};

const glassmorphismStyle = {
  background: "rgba(255, 255, 255, 0.3)",
  borderRadius: "15px",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.1)",
  border: "2px solid rgba(255, 255, 255, 0.15)",
};

export default HolderLookup;
