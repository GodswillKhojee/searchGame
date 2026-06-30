import React from 'react'
import {useState, useEffect} from 'react';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const formHandle = (e) =>
    {
        e.preventDefault()
        alert(searchQuery);
    }
  return (
    <div className='bg-black w-full h-screen'>
        <form onSubmit={formHandle} className='flex justify-center gap-3 p-4'>
            <input className='bg-white px-4 rounded-xl' type="text" placeholder='search here your games...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
             <button className='px-2 text-white bg-purple-500 rounded-xl'>Submit</button>
        </form>
    </div>

  )
}

export default Home