import { useEffect, useRef } from 'react';
import { ArrowDownward } from '@material-ui/icons';
import { init } from 'ityped'
import './intro.scss';

const Intro = () => {

  const textRef = useRef()

  useEffect(() => {
    console.log(textRef)
    init(textRef.current, { showCursor: true, backDelay:1500, backSpeed:60, strings: ['Developer', 'Designer', 'Competive Programmer' ] })
    
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/person/home.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm </h2>
          <h1>Monica Vandruff</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <ArrowDownward />
        </a>
      </div>
    </div>
  );
};

export default Intro;