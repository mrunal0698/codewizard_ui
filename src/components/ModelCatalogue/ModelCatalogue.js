import { Img, Text } from 'components';
import React, { useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ImageContainer = (props) => {
  const {imgPath}=props
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [startLeft, setStartLeft] = useState(null);
  const [startTop, setStartTop] = useState(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    setStartY(event.clientY);
    setStartLeft(imageRef.current.offsetLeft);
    setStartTop(imageRef.current.offsetTop);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    imageRef.current.style.left = `${startLeft + deltaX}px`;
    imageRef.current.style.top = `${startTop + deltaY}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
    const handleClick = (event) => {
      if (event.detail === 2) {
        setIsDragging(!isDragging);
      }
    };
  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: 'relative',
        cursor: isDragging ? 'grabbing' : 'grab',
        borderRadius:"8px",
        display:"flex",
        justifyContent:"center",
        overflow:"hidden"
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <img
        ref={imageRef}
        src={imgPath}
        alt="Design"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          maxWidth: 'none',
          maxHeight: 'none',
          width: 'auto',
          height: 'auto',
          overflow:"hidden",
        }}
        onClick={handleClick}
      />
    </div>
  );
};

const CustomDot = ({ onClick, ...rest }) => {
  const {
    index,
    active,
  } = rest;
  return (
    <button
      className={`${active ? "bg-[white]" : "inactive"} rounded-[50px] w-[10px] h-[10px] border-[1px] m-2`}
      onClick={() => onClick()} key={index}
    > 
    </button>
  )
  }

const ModelCatalogue = (props) => {
  const { selectedModel, close } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };

  return (
      <div className='w-[100%]'>
        <div className='flex justify-between py-[15px]'>
          <div className='flex gap-3 items-center'>
          <Img src={selectedModel?.IconPath} className="w-[30px] h-[30px]"/>
          <Text variant="h3" as="h3" className="text-gray_50">
             {selectedModel?.ModelName}
          </Text>
          </div>
          <Img src='images/close.png' className="w-[24px] h-[24px] cursor-pointer" onClick={close}/>
        </div>
        <Carousel
          responsive={responsive}
          arrows={true}
          showDots 
          customDot={<CustomDot />}
          containerClass={`w-[100%]`}
          swipeable={true}
          draggable={false}
        > 
          <div className='bg-gray_901 flex flex-col border-[1px] border-[#FFFFFF4D] mb-[50px] gap-[20px] p-[40px] rounded-md h-[calc(500px-50px)] overflow-y-auto'>
            <Text variant="h4" as="h4" className="text-gray_50">
              About
            </Text>
            <Text variant="body3" className="font-inter text-gray_500">
              {selectedModel?.ModelDescription}
            </Text>
            <Text variant="body3" className="font-inter text-gray_500">
              {selectedModel?.Attribute1}
            </Text>
          </div>
          <div className='bg-gray_50 flex items-center justify-center gap-[20px] rounded-md h-[calc(500px-50px)]'>
            <ImageContainer imgPath={selectedModel.Path} />
          </div>
        </Carousel>
      </div>
  );
};

export default ModelCatalogue;