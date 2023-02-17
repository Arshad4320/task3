import React from 'react';
import img1 from '../../../src/img/img.png'
import img2 from '../../../src/img/img2.png'
import img3 from '../../../src/img/img3.png'
import img4 from '../../../src/img/img4.png'
import img5 from '../../../src/img/img5.png'
import img6 from '../../../src/img/img6.png'
import img7 from '../../../src/img/img7.png'
import img8 from '../../../src/img/img8.png'
import img9 from '../../../src/img/img9.png'
import img10 from '../../../src/img/img10.png'
import img11 from '../../../src/img/img11.png'
import img12 from '../../../src/img/img12.png'
const InteractiveAi = () => {
    return (
        <div className='my-16'>
            <div className='w-1/2 mx-auto'>
                <p className='text-lg text-pink-500 font-bold text-center'>SMART TOOLS</p>
                <p className='text-3xl font-bold text-blue-900 text-center'>Interactive AI assisted labeling</p>
                <p className='text-gray-500 text-center'>Apart from usual tools like rectangle or brush, Supervisely comes with “smart” labeling tools based on a collection of class-agnostic neural networks that can be further trained on your data.</p>
                <p className='text-sky-500 font-bold text-center '>Learn more</p>
            </div>
            <div>
                <video className='w-4/5 mx-auto shadow-xl' src="https://cdn.supervise.ly/videos/ritm-poster.c507ec0.webm"></video>
            </div>
            <div className='w-4/5 mx-auto mt-3 overflow-x-scroll flex gap-3'>
                <div className=''>
                    <img className='w-32 h-20 shadow-xl border-4 border-sky-500 ' src={img1} alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Overview</p>
                </div>
                <div>
                    <img className='w-32 h-20 shadow-xl border hover:border-4' src={img2}
                        alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Clothing</p>
                </div>

                <div>
                    <img className='w-32 h-20 shadow-xl border hover:border-4' src={img3}
                        alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Wardrobe</p>
                </div>
                <div>
                    <img className='w-32 h-20 shadow-xl border hover:border-4' src={img4}
                        alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Single person</p>
                </div>
                <div>
                    <img className='w-32 h-20 shadow-xl border hover:border-4' src={img5}
                        alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Multiple people</p>
                </div>
                <div>
                    <img className='w-32 h-20 shadow-xl border hover:border-4' src={img6}
                        alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Plant</p>
                </div>
                <div>
                    <img className='w-32 h-20 shadow-xl border hover:border-4' src={img7}
                        alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Fruits</p>
                </div>
                <div>
                    <img className='w-32 h-20 shadow-xl border hover:border-4' src={img8}
                        alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Animals</p>
                </div>
                <div>
                    <img className='w-32 h-20 shadow-xl border hover:border-4' src={img9}
                        alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Person</p>
                </div>
                <div>
                    <img className='w-32 h-20 shadow-xl border hover:border-4' src={img10}
                        alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Room</p>
                </div>
                <div>
                    <img className='w-32 h-20 shadow-xl border hover:border-4' src={img11}
                        alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Busy street</p>
                </div>
                <div>
                    <img className='w-32 h-20 shadow-xl border hover:border-4' src={img12}
                        alt="" />
                    <p className='text-center font-semibold py-1 text-xl'>Manual correction</p>
                </div>
            </div>
        </div>
    );
};

export default InteractiveAi;