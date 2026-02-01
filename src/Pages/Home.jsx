import React from 'react';
import Banner from '../Component/Banner';
import { useLoaderData } from 'react-router';
import Card from '../Component/card';
import Banner2 from '../Component/Banner2';
import Banner3 from '../Component/Banner3';



const Home = () => {
    
    const newsetdata =useLoaderData()
    console.log(newsetdata)
    return (
        <div className=''>
        <Banner></Banner>
            <div className='max-w-11/12 mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
               {
                newsetdata.map(data=> <Card key={data._id} data={data}></Card>)
               } 
            </div>
            <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-5xl text-center mt-10'>Why Rent With Us</h1>
                <Banner2></Banner2>
            </div>
            <div className='w-11/12 mx-auto py-10'>
                <Banner3></Banner3>
            </div>
        </div>
    );
};

export default Home;