import React from 'react';
import { FadeLoader } from 'react-spinners';

const HydrateFallback = () => {
    return (
        <div className='min-h-[calc(100vh-240px)] text-red-800 flex justify-center items-center'>
            <FadeLoader color='currentColor'></FadeLoader>
        </div>
    );
};

export default HydrateFallback;