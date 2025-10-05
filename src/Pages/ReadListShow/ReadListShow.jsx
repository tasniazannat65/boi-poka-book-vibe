import { MapPin, StickyNote, Users } from 'lucide-react';
import React from 'react';

const ReadListShow = ({book}) => {
    const {image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating}= book
    return (
       <div className='flex  items-center gap-10 border border-[#13131326] rounded-2xl p-6 mt-5'>
     <div className=' flex justify-center items-center w-[230px] h-[229px]  bg-[#1313130d] rounded-2xl '>
       <img className=' w-[129px] h-[172px] ' src={image} alt="" />
            </div>
            <div className=' space-y-5'>
                <h3 className='font-bold text-2xl playfair-display text-[#131313]'>{bookName}</h3>
                <p className='text-[#131313cc] work-sans font-medium '>By: {author}</p>
                <div className='flex items-center space-x-3'>
                 <h3 className='text-[#131313] font-bold work-sans'>Tag</h3>
                 <div className='flex items-center space-x-3  work-sans'>
                   
                    {
                        tags.map((tag, index)=> <p className='book-tags' key={index}>#{tag}</p>)
                    }
                </div>
             <p className='work-sans text-[#131313b3] flex'><MapPin className='mr-2 text-[#131313b3]' />Year of Publishing: {yearOfPublishing}</p>
             </div>
             <div className='flex space-x-3'>
            <p className='work-sans text-[#131313b3] flex'><Users className='mr-2' />Publisher: {publisher}</p>
            <p className='work-sans text-[#131313b3] flex'><StickyNote className='mr-2' />Page: {totalPages}</p>

             </div>
              <div className='border-t-2 border-gray-200 '></div>
            <div className='space-x-3'>
            <button className='text-[#328EFF] work-sans btn bg-[#328eff26] rounded-[30px] px-[20px] py-[11px]'>Category: {category}</button>
            <button className='btn  work-sans  bg-[#ffac3326] text-[#FFAC33] rounded-[30px] px-[20px] py-[11px] '>Rating: {rating}</button>
            <button className='btn bg-[#23BE0A] text-white rounded-[30px] px-[20px] py-[11px] work-sans text-lg font-medium'>View Details</button>
           </div>               
               
               
                
            </div>
            

        </div>
    );
};

export default ReadListShow;