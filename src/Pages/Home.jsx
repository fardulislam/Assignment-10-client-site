import React from 'react';
import Banner from '../Component/Banner';
import { useLoaderData } from 'react-router';
import Card from '../Component/card';



const Home = () => {
    const carcollection = useLoaderData()
    console.log(carcollection)
    return (
        <div className=''>
        <Banner></Banner>
            <div className='max-w-11/12 mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
                {
                    carcollection.slice(0,6).map(card_collection => <Card key={card_collection._id} card_collection={card_collection}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;