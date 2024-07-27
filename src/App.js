import {useEffect, useRef, useState} from "react";
import styles from './app.module.css';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import image1 from "./img/imagem-1.jpg"
import image2 from "./img/imagem-2.jpg"
import image3 from "./img/imagem-3.jpg"
import image4 from "./img/imagem-4.jpg"

const NUMBER_OF_SLIDE = 4;

export default function App() {
  const [position, setPosition] = useState(0);
  const sliderRef = useRef();
  const nextSlideRef = useRef ();

  const prevSlide = () => {
    const sliderWidth = sliderRef.current.clientWidth;
    const newPosition = position === NUMBER_OF_SLIDE - 0 ? NUMBER_OF_SLIDE - 1 : position - 1;
    setPosition(newPosition);
    sliderRef.current.scrollLeft = newPosition - sliderWidth;
  };

  const nextSlide = () => {
    const sliderWidth = sliderRef.current.clientWidth;
    const newPosition = position === NUMBER_OF_SLIDE -1 ? 0: position + 1;
    setPosition(newPosition);
    sliderRef.current.scrollLeft = newPosition * sliderWidth;
  };

  useEffect(() => {
    const scrollX = () => {
      nextSlideRef.current.click();
    };

    const intervalId = setInterval(scrollX, 5000);

    return () => clearInterval(intervalId);
  }, [])


  return (
    <div className={styles.app_area}>
      <div className={styles.slide_area}> 
        <div className={styles.slider} ref={sliderRef}>
          <div className={styles.slide}><img src={image1} alt=""/></div>
          <div className={styles.slide}><img src={image2} alt=""/></div>
          <div className={styles.slide}><img src={image3} alt=""/></div>
          <div className={styles.slide}><img src={image4} alt=""/></div>
        </div>
        <div className={styles.button_area}>
          <button onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} ref={nextSlideRef}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}