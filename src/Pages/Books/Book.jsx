import { Star } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const Book = ({book}) => {
    const navigate = useNavigate()
    const handleBookDetails = ()=>{
        navigate(`/bookDetails/${book.bookId}`)
    }
    
    return (
        <div onClick={handleBookDetails} className='border border-[#13131326] p-6 rounded-2xl space-y-5 shadow-sm'>
            {/* card image */}
           <div className='bg-[#F3F3F3] rounded-2xl p-6'>
             <img className='w-[134px] h-[166px] mx-auto object-cover overflow-hidden' src={book.image} alt="" />
           </div>
            {/* card body */}
           <div className='flex space-x-3'>
            {
                book.tags.map((tag, index)=> <p key={index} className='book-tags work-sans'>{tag}</p> )
            }
           </div>
           
            <h3 className='font-bold text-2xl text-[#131313] playfair-display'>{book.bookName}</h3>
            <p className='font-medium text-[#131313cc] work-sans'>By: {book.author}</p>
            <div className='border-t-2 border-t-gray-200 border-dashed'></div>
             <div className='flex justify-between items-center '>
                <p className='font-medium text-[#131313cc] work-sans'>{book.category}</p>
             <p className='font-medium text-[#131313cc] work-sans flex items-center'>{book.rating}  <Star className='ml-2 text-[#131313cc]' /></p>
            
             </div>
             
           

        </div>
    );
};

export default Book;