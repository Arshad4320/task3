import React from 'react';
import img from '../../../src/img/img2.jpg'
import img2 from '../../../src/img/img3.jpg'
import video from '../../../src/video/ritm.2e946ec.webm'
import video2 from '../../../src/video/vdio2.webm'
import video3 from '../../../src/video/vdio3.webm'
const PlatForm = () => {
    return (
        <div className='  bg-green-50 mx:16 lg:20'>
            <div className='lg:ml-24 grid md:grid-cols-1 mx-10 lg:grid-cols-2 sm:grid-cols-1 '>
                {/* Text container start */}
                <div className='main-text-container sm:mx-8'>

                    <div className='py-7 btn-container flex'>
                        <button className='p-2 rounded-md bg-blue-100   hover:bg-black text-slate-600 hover:text-white font-semibold mr-5'>We'er hiring! </button>
                        <button className='p-2 rounded-md bg-blue-100 font-semibold text-slate-600 hover:bg-black hover:text-white'>#stopthewar 🇺🇦</button>
                    </div>

                  <div className='text-container'>
                        <h1 className='lg:text-5xl text-4xl font-bold'>Unified OS/Platform
                            for <span className='text-pink-500'>computer vision</span>
                        </h1>
                        <p className='mt-2 text-2xl'>
                            Develop AI faster and better with on-premise, enterprise-grade end-to-end solution for every task: from labeling to building production models.
                        </p>

                  </div>
                  <div className='mt-3 sm:flex'>
                    <button className='btn hover:bg-pink-500 mb-3 bg-pink-500 mr-3'>Book a Demo</button>
                        <button className="btn btn-outline hover:bg-green-50 hover:border-pink-500 hover:text-pink-500">Try online for free</button>
                  </div>
                </div>
                {/* video container start */}
                <div className='video-content mt-10 bg-green-50 lg:block hidden '>
                    <div className=''><img src={img} className='h-5/6 w-72 -mt-4 absolute z-10 rotate-6 shadow-2xl' alt="" /></div>

                    <div><img src={img2} className='h-3/4 absolute -mt-1 z-20 w-12 ml-60 rotate-6' alt="" /></div>

                    <div className='ml-10'><video className='absolute mt-80 ml-96 z-10 w-52 rotate-6' src={video2}></video></div>
                    <div><video className='absolute mt-64 ml-64 z-10 w-52 rotate-6' src={video3}></video></div>

                    <div className='ml-60  w-96 mr-30'><video className='relative  rounded-md rotate-6' src={video}></video></div>
                </div>
            </div>
        </div>
    );
};

export default PlatForm;