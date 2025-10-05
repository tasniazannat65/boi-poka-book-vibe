import React from 'react';
import Book from './Book';


const Books = ({books}) => {
    
    
    return (
        <div>
            <h3 className='font-bold text-4xl text-[#131313] text-center playfair-display py-10'>Books</h3>
           <div className='grid grid-cols-3 gap-5 py-10'>
            {
                books.map(book=> <Book key={book.bookId} book={book}></Book>)
            }
           </div>
        </div>
    );
};

export default Books;