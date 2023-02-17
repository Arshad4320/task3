import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdvertiseData from './AdvertiseData';

const Advertise = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('image.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='lg:mt-48 mx-16 lg:mx-20  '>
            <h2 className='text-2xl font-semibold text-center py-10'>  Trusted by Fortune 500. Used by 65,000+ companies and researchers worldwide</h2>
            <div className='grid grid-cols-3 lg:grid-cols-7 gap-5 mb-24 '>
                {
                    data.map((data => <AdvertiseData data={data} key={data.id}></AdvertiseData>))
                }
            </div>
        </div>
       
    );
};

export default Advertise;