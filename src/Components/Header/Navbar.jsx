import React from 'react';
import Container from '../Container/Container';

const Navbar = () => {
  const Links = <>
    <li><a href="">Home</a></li>
      <li><a href="">Listed Books</a></li>
      <li><a href="">Pages to Read</a></li>
  </>

    return (
  <Container>
         <div className="navbar bg-base-100  work-sans">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {Links}
      </ul>
    </div>
    <a className="text-xl lg:text-3xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1 text-[#131313cc]">
     {Links}
    </ul>
  </div>
  <div className="navbar-end ">
    <a className='btn text-lg font-semibold text-white bg-[#23BE0A] rounded-lg p-4 lg:px-7 lg:py-[18px] mr-5'>Sign In</a>
    <a className="btn text-lg font-semibold text-white bg-[#59C6D2] rounded-lg p-4 lg:px-7 lg:py-[18px]">Sign Up</a>
  </div>
</div>
  </Container>
    );
};

export default Navbar;