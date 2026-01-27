import React from 'react';
import Banner from '../Component/Banner';
import { useLoaderData } from 'react-router';
import Card from '../Component/card';



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
        </div>
    );
};

export default Home;