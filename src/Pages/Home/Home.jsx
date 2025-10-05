import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Container from '../../Components/Container/Container';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const books = useLoaderData()
   
    return (
        <Container>
            <div>
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
        </Container>
    );
};

export default Home;