import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const alphabetList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const settings = {
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Alphabet = () => (
  <Slider {...settings}>
    {alphabetList.map((letter, index) => (
      <div key={index}>{letter}</div>
    ))}
  </Slider>
);

export default Alphabet;
