import React from 'react';

const Slides = ({slide}) => {
    const {title,description,picture} =slide
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full justify-center items-center">
    <img src={picture} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute w-1/2 flex flex-col  text-white">
   
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">{description}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full justify-center items-center">
    <img src={picture} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute w-1/2 flex flex-col  text-white">
   
   <h1 className="mb-5 text-5xl font-bold">{title}</h1>
   <p className="mb-5">{description}</p>
   <button className="btn btn-primary">Get Started</button>
 </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full justify-center items-center">
    <img src={picture} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute w-1/2 flex flex-col  text-white">
   
   <h1 className="mb-5 text-5xl font-bold">{title}</h1>
   <p className="mb-5">{description}</p>
   <button className="btn btn-primary">Get Started</button>
 </div>
  </div> 
</div>
    );
};

export default Slides;