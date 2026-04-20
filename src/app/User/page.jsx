import { Syncopate } from 'next/font/google';
import Link from 'next/link';
import React from 'react';


export const metadata = {
    title: 'Users',
    description: '...',
}

const UserPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log("users: ", users);
    return (
        <div className='text-center  space-y-10 my-10'>
            <h2 >this is user pages</h2>
            <div className=' space-y-4'>
                {
                    users.map((user, id) => <div key={id} className='border-2 p-8'>
                        <h2> {user.name} </h2>
                        <p>{user.username} </p>
                        <Link href={`/User/${user.id}`} > <button className='btn btn-primary'>User Details</button> </Link>
                    </div> )
                }
            </div>
        </div>
    );
};

export default UserPage;