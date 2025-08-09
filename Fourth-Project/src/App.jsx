import React, { useState } from 'react'
import Products from './Products';

function App() {
  const [a, b] = useState(80);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      <Products age={69} data={{name: 'John', age: 20}} />
    </div>
  )
}

export default App
