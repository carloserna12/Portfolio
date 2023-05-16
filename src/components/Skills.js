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
      // the naming can be any, depends on you.
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
                        <p>I am Carlos, a systems engineer and multimedia producer with a strong background in software development. As a passionate developer, I not only focus on writing clean and efficient code, but I also value the adoption of good programming practices.
                        
                        
                        I have experience in implementing scalable and modularized architectures, allowing me to build robust and flexible systems. Additionally, I am familiar with a wide range of design patterns, enabling me to tackle complex problems in a structured and efficient manner.
                        </p>
                        <p>
                        I understand the importance of staying up to date with the latest trends and advancements in the software development industry. I am always seeking opportunities to enhance my skills and learn new technologies that can boost my abilities as a developer.
                        
                        I am committed to excellence and delivering quality solutions. I believe in effective communication, teamwork, and close collaboration with clients and colleagues to achieve exceptional results.
                        </p>
                        <p>
                        If you are looking for someone who is a skilled software developer capable of applying best practices, implementing solid architectures, and utilizing effective design patterns, feel free to contact me. I am excited to take on new challenges and contribute to the success of your projects.
                        </p>
                        {/*<Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Frontend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Software Development</h5>
                            </div>
  </Carousel>*/}
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
