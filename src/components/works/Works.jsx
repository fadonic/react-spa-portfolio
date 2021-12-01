import { useState } from 'react';
import './works.scss';

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const handleClick = (way)=>{
   way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
   setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0)
   
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(${currentSlide * -100}vw)`}}>

        <div className="container">
          <div className="item">
          <h1>slide 1</h1>
          </div>
        </div>

        <div className="container" style={{backgroundColor:'transparent'}}>
          <div className="item">
           <h1>slide 2</h1>
          </div>
        </div>

        <div className="container" style={{backgroundColor:'transparent'}}>
          <div className="item">
            <h1>slide 3</h1>
          </div>
        </div>

      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick('left')} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  );
};

export default Works;