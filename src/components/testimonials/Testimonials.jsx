import './testimonials.scss';

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">

        <div className="card">
          <div className="top">
            <img src="assets/person/3.jpeg" alt="" />
          </div>
          <div className="center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus suscipit?
          </div>
          <div className="bottom">
            <h3>John</h3>
            <h4>Software Developer</h4>
          </div>
        </div>

        <div className="card featured">
          <div className="top">
            <img src="assets/person/3.jpeg" alt="" />
          </div>
          <div className="center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus suscipit?
          </div>
          <div className="bottom">
            <h3>John</h3>
            <h4>Software Developer</h4>
          </div>
        </div>

        <div className="card">
          <div className="top">
            <img src="assets/person/3.jpeg" alt="" />
          </div>
          <div className="center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus suscipit?
          </div>
          <div className="bottom">
            <h3>John</h3>
            <h4>Software Developer</h4>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;