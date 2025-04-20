import React from 'react';  
import Slider from 'react-slick';
import './slider.css';
import Slide1 from '../../../assets/images/carousel1.jpg';
import Slide2 from '../../../assets/images/carousel2.jpg';

const HomeSlider = () => {   

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <section className="homeSlider">
            <div className="container-fluid">
            <Slider {...settings}>
                <div className='item'>
                    <img src={Slide1} alt="Slide 1" className='w-100' />
                </div>
                <div className='item'>
                    <img src={Slide2} alt="Slide 2" className='w-100' />
                </div>
            </Slider>

            </div>
        </section>
    );
}

export default HomeSlider;