import React from 'react';
import { FaCheck } from "react-icons/fa";

const Card = () => {
    return (
        <div className='my-20'>
            <div>
                <h2 className='text-center font-bold text-4xl text-blue-900'>5 principles of Supervisely</h2>
                <p className='text-center text-slate-600 m-3'>There are hundreds of features within the platform, but everything we do is defined by these five concepts.</p>
            </div>
            <div className='card-data lg:mx-24 mx-16 mt-16 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1  gap-5'>
                {/* card-start */}
                <div className='lg:w-56 mb-5  bg-base-100 shadow-xl p-6 rounded-xl border-2 hover:border-sky-400'>
                    <div className='bg-slate-900 w-12 justify-center items-center flex mx-auto h-12 rounded-full text-white font-bold '> <h1 className='text-3xl'>1</h1></div>
                    <h2 className="mt-3 text-slate-900 text-xl font-bold      text-center">Powerful labeling suites</h2>
                    <span className='flex justify-center m-2 text-sky-400 font-semibold'>Learn more</span>
                    <p className='text-center mb-2'>Best-in-class tools, augmented with AI-assistance and custom UIs</p>
                    <ul className=''>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Images</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Videos</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>3D sensor fusion</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>DICOM</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>AI assisted labeling</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Custom UIs</li>
                    </ul>

                </div>
                <div className='lg:w-56 mb-5  bg-base-100 shadow-xl p-6 rounded-xl border-2 hover:border-sky-400'>
                    <div className='bg-slate-900 w-12 justify-center items-center flex mx-auto h-12 rounded-full text-white font-bold '> <h1 className='text-3xl'>2</h1></div>
                    <h2 className="mt-3 text-slate-900 text-xl font-bold      text-center">Data and users collaboration</h2>
                    <span className='flex justify-center m-2 text-sky-400 font-semibold'>Learn more</span>
                    <p className='text-center mb-2'>Best-in-class tools, augmented with AI-assistance and custom UIs</p>
                    <ul className=''>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Images</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Videos</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>3D sensor fusion</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>DICOM</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>AI assisted labeling</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Custom UIs</li>
                    </ul>
                </div>

                <div className='lg:w-56 mb-5  bg-base-100 shadow-xl p-6 rounded-xl border-2 hover:border-sky-400'>
                    <div className='bg-slate-900 w-12 justify-center items-center flex mx-auto h-12 rounded-full text-white font-bold '> <h1 className='text-3xl'>3</h1></div>
                    <h2 className="mt-3 text-slate-900 text-xl font-bold      text-center">3
                        Neural networks ecosystem</h2>
                    <span className='flex justify-center m-2 text-sky-400 font-semibold'>Learn more</span>
                    <p className='text-center mb-2'>Best-in-class tools, augmented with AI-assistance and custom UIs</p>
                    <ul className=''>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Images</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Videos</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>3D sensor fusion</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>DICOM</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>AI assisted labeling</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Custom UIs</li>
                    </ul>
                </div>

                <div className='lg:w-56 mb-5  bg-base-100 shadow-xl p-6 rounded-xl border-2 hover:border-sky-400'>
                    <div className='bg-slate-900 w-12 justify-center items-center flex mx-auto h-12 rounded-full text-white font-bold '> <h1 className='text-3xl'>4</h1></div>
                    <h2 className="mt-3 text-slate-900 text-xl font-bold      text-center">Platform and customization</h2>
                    <span className='flex justify-center m-2 text-sky-400 font-semibold'>Learn more</span>
                    <p className='text-center mb-2'>Best-in-class tools, augmented with AI-assistance and custom UIs</p>
                    <ul className=''>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Images</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Videos</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>3D sensor fusion</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>DICOM</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>AI assisted labeling</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Custom UIs</li>
                    </ul>
                </div>

                <div className='lg:w-56 mb-5  bg-base-100 shadow-xl p-6 rounded-xl border-2 hover:border-sky-400'>
                    <div className='bg-slate-900 w-12 justify-center items-center flex mx-auto h-12 rounded-full text-white font-bold '> <h1 className='text-3xl'>5</h1></div>
                    <h2 className="mt-3 text-slate-900 text-xl font-bold text-center">
                        Enterprise-grade solutions</h2>
                    <span className='flex justify-center m-2 text-sky-400 font-semibold'>Learn more</span>
                    <p className='text-center mb-2'>Best-in-class tools, augmented with AI-assistance and custom UIs</p>
                    <ul className=''>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Images</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Videos</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>3D sensor fusion</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>DICOM</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>AI assisted labeling</li>
                        <li className='flex mb-2'><span className='w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center mr-2'><FaCheck /></span>Custom UIs</li>
                    </ul>
                </div>


            </div>
        </div>

    );
};

export default Card;