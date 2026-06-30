import React from 'react'
import { getGames } from '../services/api';
import { searchGames } from '../services/api';

const GameCards = ({ game }) => {
    const favBtn = (e) =>
    {
        e.preventDefault();
        alert("clicked fav")
    }
  return (
    <div>
        <div>
            <img src={game.thumbnail} alt={game.title} />
            <h3 className='text-white'>{game.title}</h3>
            <p className='text-white text-xs'>{game.platform}</p>
            <div>
                <button className='text-xl text-white' onClick={favBtn}>♡</button>
            </div>
        </div>
    </div>
  )
}

export default GameCards