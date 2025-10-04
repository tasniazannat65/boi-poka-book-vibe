import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 mx-auto pt-5'>
            {children}
        </div>
    );
};

export default Container;