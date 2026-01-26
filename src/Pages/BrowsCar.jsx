import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Component/card';

const BrowsCar = () => {
    const carcollection = useLoaderData()
    console.log(carcollection)
    return (
        <div className='max-w-11/12 mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-24'>
            {
                carcollection.map(card_collection => <Card key={card_collection._id} card_collection={card_collection}></Card> )
            }
        </div>
    );
};

export default BrowsCar;