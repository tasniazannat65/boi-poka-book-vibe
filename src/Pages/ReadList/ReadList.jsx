import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../../Components/Container/Container';
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../Utilities/AddToDB';
import ReadListShow from '../ReadListShow/ReadListShow';




const ReadList = () => {
    const data = useLoaderData()
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('')
    console.log(data)
    useEffect(()=>{
        const storedBookData = getStoredBook()
        const convertedStoredBooks = storedBookData.map(bookId=> parseInt(bookId))
        const myReadList = data.filter(book=> convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    }, [data]);
    const handleSort = (type)=>{
        setSort(type)
       if(type === 'Pages'){
         const sortedByPage = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
        setReadList(sortedByPage);
    }
       if(type === 'Ratings'){
         const sortedByRatings = [...readList].sort((a,b)=> a.rating - b.rating);
        setReadList(sortedByRatings);
    }
       }
    return (
        <div>
     <Container>
        <details className="dropdown flex flex-col justify-center items-center  ">
  <summary className="btn m-1 work-sans font-semibold text-lg bg-[#23BE0A] text-white rounded-[8px]">Sort By: {sort? sort : ''}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('Pages')}>Pages</a></li>
    <li><a onClick={()=>handleSort('Ratings')}>Ratings</a></li>
  </ul>
</details>
               <Tabs>
    <TabList>
      <Tab >Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
        
     <div className='mb-7'>
        
        {
            readList.map(book=><ReadListShow key={book.bookId} book={book}></ReadListShow>)
        }
     </div>
    
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
     </Container>
        </div>
    );
};

export default ReadList;