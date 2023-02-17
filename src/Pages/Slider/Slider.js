import React from 'react';
import icon from '../../../src/img/icon3.jpg'
import slider1 from '../../../src/img/slider1.webp'
import slider3 from '../../../src/img/slider3.webp'
import slider4 from '../../../src/img/slider4.webp'
const Slider = () => {
    return (
        <div>
            {/* slider-content */}
            <div >
              
                    <div className='flex justify-center'>
                        <img className='w-8 h-8 mr-1' src={icon} alt="" />
                        <h2 className='text-green-600 text-center font-bold text-2xl'>3D labeling suite</h2>
                    </div>
                    <div className='mx-auto text-center w-1/3'>
                        <p className='text-gray-500 mt-2 mb-2'>Label comprehensive 3D scenes from LiDAR or RADAR sensors with additional photo context, AI tracking and point cloud segmentation.</p>
                        <p className='text-sky-500 text-xl font-bold mb-6'>Explore 3D labeling</p>
                    </div>
                   
                </div>
                {/* slider-content-end */}

                {/* slider section start */}

            <div className="carousel w-4/5 mx-auto ">
                <div id="slide1" className="carousel-item relative  bg-indigo-500 p-8 rounded-lg  w-10/12 mx-10">
                    <img src={slider1} alt='' className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn bg-white text-black btn-circle">❮</a>
                        <a href="#slide2" className="btn bg-white text-black btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative bg-indigo-400 p-8 rounded-lg  w-10/12 mx-10">
                    <img src={slider3} alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn bg-white text-black btn-circle">❮</a>
                        <a href="#slide3" className="btn bg-white text-black btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative bg-emerald-200 p-8 rounded-lg  w-10/12 mx-10">
                    <img src={slider4} alt='' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn bg-white text-black btn-circle">❮</a>
                        <a href="#slide1" className="btn bg-white text-black btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
                {/* slider section end */}
            </div>
    );
};

export default Slider;