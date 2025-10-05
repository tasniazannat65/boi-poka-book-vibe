import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
 import { ToastContainer} from 'react-toastify';
import HydrateFallback from '../LoadingSpinner/HydrateFallback';

const RootLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation?.state === 'loading' ? (<HydrateFallback/>) : (  <main className='min-h-[calc(100vh-240px)]'>
                <Outlet></Outlet>
            </main>)
            }
            
          
            <Footer></Footer>





            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
        </div>
    );
};

export default RootLayout;