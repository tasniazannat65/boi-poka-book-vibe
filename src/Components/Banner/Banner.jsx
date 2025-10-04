import React from 'react';
import bookImg from '../../assets/pngwing1.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center bg-[#1313130d] rounded-3xl p-20'>
            {/* banner-content */}
            <div className='space-y-5 lg:space-y-10 text-center lg:text-left'>
                <h1 className='font-bold text-4xl lg:text-[56px] text-[#131313] playfair-display'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn font-bold text-xl text-white bg-[#23BE0A] px-7 py-[21px] rounded-lg work-sans'>View The List</button>
            </div>
            {/* banner-image */}
            <div>
                <img src={bookImg} alt="book image" />
            </div>
        </div>
    );
};

export default Banner;