import React from 'react'
import { getGames, searchGames } from '../services/api';

import { useGameContext } from '../contexts/GameContext';

const GameCards = ({ game }) => {

    const {favGame, addGames, removeGames, isFav} = useGameContext();
    const fav = isFav(game.id);
    const favBtn = (e) =>
    {
        e.preventDefault();
        if(fav) removeGames(game.id);
        else addGames(game);
    }
  return (
    <div>
        <div>
            <img src={game.thumbnail} alt={game.title} />
            <h3 className='text-white'>{game.title}</h3>
            <p className='text-white text-xs'>{game.platform}</p>
            <div>
                <button className={`text-xl transition-colors ${fav ? "text-red-500" : "text-white"}`} onClick={favBtn}>♡</button>
            </div>
        </div>
    </div>
  )
}

export default GameCards