import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='min-h-screen text-center flex flex-col justify-center items-center space-y-3 bg-gray-200 '>
           <h1 className='text-5xl font-semibold'>error😔</h1>
           <p className='text-2xl'>page not found !</p>
           <Link className='btn btn-primary' to={'/'}> Go to Home</Link>
        </div>
    );
};

export default Error;