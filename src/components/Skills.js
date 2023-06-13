import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About me</h2>
                        <p>I'm Carlos, a systems engineer and multimedia producer with experience in software development. I excel at applying best practices and building scalable and modular architectures. Additionally, I use effective design patterns to tackle problems in a structured manner.
                        </p>
                        <p> I stay updated with the latest trends and continuously seek opportunities to learn new technologies. My approach is centered around excellence, effective communication, and close collaboration to achieve exceptional results. If you're in need of a skilled and dedicated software developer, I'm ready to contribute to the success of your projects.</p>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
