import { h } from 'preact';
import render from 'preact-render-to-string'
import Slider from "react-slick";
import Quote from 'react-icons/lib/md/format-quote'
import Prev from 'react-icons/lib/md/navigate-before'
import Next from 'react-icons/lib/md/navigate-next'
import { Element } from 'react-scroll'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a className="next" onClick={onClick}><Next size={40} color="rgba(255,255,255, .5)" /></a>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <a className="prev" onClick={onClick}><Prev size={40} color="rgba(255,255,255, .5)" /></a>
  );
}

const settings = {
      dots: true,
      dotsClass: "mydots",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

const Quotes = () => (
  <div className="p50">
    <Element name="testimonials">
      <div className="quotes">
        <div className="fixwrap">
          <div className="shell">
            <div className="quotes_inner">
              <div className="decor">
                <Quote size={32} color="#7b67c7" />
              </div>
              <div className="quotes_slider">
                <Slider {...settings}>
                  <div>
                    <div className="quote">
                      <div className="quotes_head">
                        <h4>Linus Torvalds</h4>
                        <p>Open Source Godfather</p>
                      </div>
                      <p>
                          Talk is cheap. Show me the code.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="quote">
                      <div className="quotes_head">
                        <h4>Martin Fowler</h4>
                        <p>Someone</p>
                      </div>
                      <p>
                        Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="quote">
                      <div className="quotes_head">
                        <h4>John Johnson</h4>
                        <p>Someone</p>
                      </div>
                      <p>
                          First, solve the problem. Then, write the code.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  </div>
);

export default Quotes;
