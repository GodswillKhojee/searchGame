import React from 'react'
import { useContext, useState, useEffect, createContext } from 'react'

export const GameContext = createContext();
export const useGameContext = () => useContext(GameContext);
export const GameProvider = ({ children }) => {

    const [favGame, setFavgame] = useState([]);

    useEffect(() => {
        const storedFav = localStorage.getItem('favGame');

        if (storedFav) setFavgame(JSON.parse(storedFav));
    }, [])

    useEffect(() => {
        localStorage.setItem('favGame', JSON.stringify(favGame))
    }, [favGame])

    // add, remove, check games

    const addGames = (m) => {
        setFavgame(prev => [...prev, m]);
    }

    const removeGames = (gameid) => {
        setFavgame(prev => prev.filter(m => m.id !== gameid))
    }

    const isFav = (gameid) => {
        return favGame.some(m => m.id === gameid);
    }

    const value = {
        favGame,
        addGames,
        removeGames,
        isFav,
    };

    return <GameContext.Provider value={value}>
        {children}
    </GameContext.Provider>
}

export default GameProvider;