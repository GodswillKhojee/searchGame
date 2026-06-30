import React from 'react'
import { useGameContext } from '../contexts/GameContext'
import GameCards from '../components/GameCards'

const WishList = () => {
  const {favGame} = useGameContext();

  if(favGame.length > 0)
  {
    return(
    <div className='w-full min-h-screen bg-black p-6'>
      <h2>Your wishlist</h2>
      <div>
        {favGame.map((game) => (
          <GameCards game={game} key={game.id} />
        ))}
      </div>
    </div>)
  }
  return (
    <div className='w-full h-screen bg-black text-white flex justify-center items-center'>
      <div className='text-center py-4 border-2 border-purple-500 rounded-xl p-8'>
        <h2 className='font-bold text-xl text-[#e50914]'>No game wishlisted here !!</h2>
        <p className='text-[#999]'>click on heart button to wishlist!!</p>
      </div>
    </div>
  )
}

export default WishList