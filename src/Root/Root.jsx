import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='w-6xl mx-auto mt-3'>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Root;