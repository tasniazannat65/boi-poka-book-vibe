import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Container from '../../Components/Container/Container';
import { addToStoredDB } from '../../Utilities/AddToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const {bookId}= useParams()
    const data = useLoaderData()
    const findData = data.find(book=> book.bookId === Number(bookId))
    const {image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = findData;

    const handleBookRead = (bookId)=>{
        MySwal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
        addToStoredDB(bookId)
    }
    return (
        <Container>
     <div className='flex justify-between items-center gap-10 mb-10'>
     <div className='flex-1 flex justify-center items-center w-[450px] h-[700px] bg-[#1313130d] rounded-2xl '>
       <img className=' w-[425px] h-[564px] ' src={image} alt="" />
            </div>
            <div className='flex-1 space-y-5'>
                <h3 className='font-bold text-4xl playfair-display text-[#131313]'>{bookName}</h3>
                <p className='text-[#131313cc] work-sans font-medium text-xl'>By: {author}</p>
                <p className='font-medium text-[#131313cc] work-sans text-xl'>{category}</p>
                <div className='border-t-2 border-gray-200'></div>
                <p className='work-sans text-[#131313b3]'><span className='font-bold text-[#131313]'>Review: </span>{review}</p>
               <div className='flex items-center space-x-3'>
                 <h3 className='text-[#131313] font-bold work-sans'>Tag</h3>
                 <div className='flex items-center space-x-3  work-sans'>
                   
                    {
                        tags.map((tag, index)=> <p className='book-tags' key={index}>#{tag}</p>)
                    }
                </div>

               </div>
               <div className='border-t-2 border-gray-200'></div>
                <p className='work-sans text-[#131313b3]'>Number of Pages: <span className='font-semibold text-[#131313]'>{totalPages}</span></p>
                <p className='work-sans text-[#131313b3]'>Publisher: <span className='font-semibold text-[#131313]'>{publisher}</span></p>
                <p className='work-sans text-[#131313b3]'>Year of Publishing: <span className='font-semibold text-[#131313]'>{yearOfPublishing}</span></p>
                <p className='work-sans text-[#131313b3]'>Rating: <span className='font-semibold text-[#131313]'>{rating}</span></p>
                <div className='flex items-center space-x-3'>
                 <button onClick={()=>handleBookRead(bookId)} className='btn text-[#131313] font-semibold text-lg rounded-[8px] border-2 border-[#1313134d] px-[18px] py-[28px] bg-white work-sans'>Read</button>
                 <button className='btn bg-[#50B1C9] text-white font-semibold text-lg rounded-[8px] px-[18px] py-[28px] work-sans'>Wishlist</button>
                </div>
            </div>
            

        </div>
        </Container>
    );
};

export default BookDetails;