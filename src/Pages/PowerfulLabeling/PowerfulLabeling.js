import React from 'react';
import icon1 from '../../../src/img/icon.jpg'
import icon2 from '../../../src/img/icon2.jpg'
import icon3 from '../../../src/img/icon3.jpg'
import icon4 from '../../../src/img/icon4.jpg'
const PowerfulLabeling = () => {
    return (
        <div >
            <div className='flex  justify-center'>
              <div className='text-center text-pink-500'>
                    <h2 className='text-6xl font-bold'>1</h2>
                    <p className='text-pink-500 font-bold my-2'>FIRST PRINCIPLE</p>
                    <p className='text-blue-900 text-3xl font-bold'>Powerful labeling suites</p>
                    <p className='text-blue-900 mt-3 mb-5'> Pixel-accurate annotations with advanced ML-powered tools for every case.</p>
              </div>
            </div>

            {/* card-labeling */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8 lg:mx-24 mx-10'>
                <div className='flex border-2 rounded-xl border-violet-600 p-2 shadow-xl '>
                   <div>
                        <img className='w-12 h-12  mr-3' src={icon1} alt="" />
                   </div>
                    <div>
                        <h2 className='text-violet-600 font-semibold text-xl'>Image labeling</h2>
                        <p className='text-sm'>With AI and custom UIs</p>
                    </div>
                </div>

                <div className='flex border-2 rounded-xl hover:border-blue-600 p-2 shadow-xl '>
                    <div>
                        <img className='w-12 h-12  mr-3' src={icon2} alt="" />
                    </div>
                    <div>
                        <h2 className='text-blue-600 font-semibold text-xl'>Video labeling</h2>
                        <p className='text-sm'>Track with AI and timelines</p>
                    </div>
                </div>

                <div className='flex border-2 rounded-xl hover:border-green-600 p-2 shadow-xl '>
                    <div>
                        <img className='w-12 h-12  mr-3' src={icon3} alt="" />
                    </div>
                    <div>
                        <h2 className='text-green-600 font-semibold text-xl'>3D Clouds & LiDAR</h2>
                        <p className='text-sm'>Photo context and episodes</p>
                    </div>
                </div>


                <div className='flex border-2 rounded-xl hover:border-yellow-400 p-2 shadow-xl '>
                    <div>
                        <img className='w-12 h-12  mr-3' src={icon4} alt="" />
                    </div>
                    <div>
                        <h2 className='text-yellow-400 font-semibold text-xl'>DICOM & Volumetric</h2>
                        <p className='text-sm'>PMedical multi-slice scans</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PowerfulLabeling;