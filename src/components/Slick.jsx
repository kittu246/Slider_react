import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { shortList, list, longList } from "../data";
import { ImQuotesRight } from "react-icons/im";


const Slick = () => {

const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplay: true,
        fade: true,
      autoplaySpeed: 1000,
      cssEase: "linear",
      pauseOnHover: true

      };

  return (
    <div className="slickContainer">
    <h2>Slick Slider</h2>
    <Slider {...settings}>
    {list.map((user) => {
        const { id, image, name, title, quote } = user;

        return (
          <div key={id} className="slick"  >
            <img src={image} />
            <h2>{name}</h2>
            <h5>{title}</h5>
            <p>{quote}</p>

            <ImQuotesRight className="quoteIcon" />
          </div>
        );
      })}
    </Slider>
  </div>
  )
}

export default Slick