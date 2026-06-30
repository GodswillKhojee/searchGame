import React from 'react'
import { useState, useEffect } from 'react';
import GameCards from '../components/GameCards';
import { getGames, searchGames } from '../services/api';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [games, setGames] = useState([]);

    useEffect(() => {
        const loadAllGames = async () => {
            try {
                const allGames = await getGames();
                setGames(allGames);
                console.log(allGames);
            } catch (error) {
                console.error(error);
                
            }
        }
        loadAllGames();
    }, [])

    const formHandle = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) {
            const allGame = await getGames();
            setGames(allGame);
            return;
        }
        
        try {
            const searchResult = await searchGames(searchQuery);
            setGames(searchResult);
        } catch (error) {
            console.log(error);
            setGames("no game found...")
        }
    }
    return (
        <div className='bg-black w-full h-full'>
            <form onSubmit={formHandle} className='flex justify-center gap-3 p-4'>
                <input className='bg-white px-4 rounded-xl' type="text" placeholder='search here your games...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='px-2 text-white bg-purple-500 rounded-xl'>Submit</button>
            </form>
            <div className='w-full h-full'>
                {games.map((game) => (
                    <GameCards
                        game={game}
                        title={game.title}
                        thumbnail={game.thumbnail}
                        key={game.id}
                        platform={game.platform} />
                ))}
            </div>
        </div>

    )
}

export default Home