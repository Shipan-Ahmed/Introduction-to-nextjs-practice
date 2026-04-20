import React from 'react';



export const metadata = {
    title: 'Users Details',
    description: '...',
}

const UserId = async ({ params }) => {
    
    const { userId } = await params;
    console.log("user id: ", userId);

    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userDetails = await user.json();
    console.log("userDetails: ", userDetails);

    return (
        <div className=' text-center  space-y-6 my-10 border-2'>
            <h2>this is user id page</h2>
            <h1>{userDetails.email} </h1>
            <p>{userDetails.phone} </p>
            <p>{userDetails.website} </p>
        </div>
    );
};

export default UserId;