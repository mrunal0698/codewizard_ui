import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = (props) => {
          
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  
  return (
    
    <div >
    <Carousel 
       swipeable={false}
       draggable={false}
       showDots={true}
       responsive={responsive}
       partialVisible={false}
       infinite={true}
       autoPlay={true}
       autoPlaySpeed={1000}
       keyBoardControl={true}
       customTransition="all .5"
       transitionDuration={1000}
       containerClass="carousel-container"
       removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
       dotListClass="custom-dot-list-style nav-dot"
       itemClass="carousel-item-padding-40-px"
       renderDotsOutside={true}
       focusOnSelect={false}
       shouldResetAutoplay={true}
      >
        {props.children}
      </Carousel>
    </div>
     
  )
   
}

export default MultiCarousel;