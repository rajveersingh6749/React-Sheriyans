import React from 'react'
import Products from './Products'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-10'>
      <div className='w-44 h-32 rounded-md bg-red-500 p-3'>
        <h3 className='text-2xl font-bold'>Hello World</h3>
      </div>

      <Products />
    </div>
  )
}

export default App