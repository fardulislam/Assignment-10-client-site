import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='flex justify-end gap-1'>
                <h2 className='text-2xl font-semibold'>loading</h2>
        <span className="loading loading-dots loading-xl"></span>
            </div>
        </div>
    );
};

export default Loading;