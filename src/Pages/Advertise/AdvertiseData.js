import React from 'react';

const AdvertiseData = ({ data }) => {
    const {image}=data
    return (
        <div>
         <img className='w-28 h-10' src={image} alt="" />          
        </div>
    );
};

export default AdvertiseData;