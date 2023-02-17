import React from 'react';

const Labeling = () => {
    return (
        <div className='mb-20'>
            <h3 className='text-md font-semibold text-pink-600 text-center'>MORE THAN JUST LABELING</h3>
            <h2 className='text-3xl font-bold text-center text-blue-900'>What's Supervisely?</h2>
            <div className='w-1/2 mx-auto text-gray-500 font-semibold my-5'>
                <p className='text-center mb-3'>Hundreds of companies and researchers use Supervisely every day to label images, videos, LiDAR 3D sensor fusion or even DICOM volumes, manage datasets, collaborate together and train neural networks. But that's just part of the story.</p>

                <p className='text-center mb-3'>Unlike other products, we create the true platform that integrates countless open-source tools and custom built solutions within a single ecosystem using Supervisely Apps — interactive web-apps running in your browser, yet powered by Python.</p>

                <p className='text-center'>Just like a real OS, Supervisely gives you unlimited customization and variability, aiming to solve every task in computer vision.</p>
           </div>

           <div className='flex justify-center'>
                <iframe className='rounded-lg' width="450" height="280" src="https://www.youtube.com/embed/rH3g2aJJEGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
           <div className='text-center m-4'>
                <h2 className='mb-2 font-bold text-lg text-cyan-500'>What is Supervisely: watch full course </h2>
                <h2 className='font-bold text-lg text-cyan-500'>Feature comparison with alternatives </h2>
           </div>
        </div>
    );
};

export default Labeling ;