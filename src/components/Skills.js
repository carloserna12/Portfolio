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
                        <p>My experience in web development has allowed me to acquire skills in various areas.<br></br>Check out some of them below. "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula mauris ac purus consectetur, id dignissim lectus egestas. Vestibulum consequat auctor lacus, ut finibus massa eleifend nec. Curabitur bibendum, mi a sollicitudin pulvinar, orci risus consectetur ex, ac aliquet nisi mi sed urna. Nullam a tortor sit amet nisi rutrum luctus et id felis. Proin eu sem a turpis efficitur lacinia a sed elit. Phasellus venenatis ex eu pulvinar congue. Mauris accumsan lorem quis elit finibus condimentum. Etiam nec lacus in urna placerat venenatis eget a odio. Donec euismod tortor a ex dapibus fermentum. Sed luctus elit quis lobortis aliquet. Cras consequat tristique est, id rutrum ligula faucibus vitae. Fusce interdum consectetur aliquet. Nam sed sagittis quam. Vivamus efficitur ultricies odio sit amet lobortis."
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
