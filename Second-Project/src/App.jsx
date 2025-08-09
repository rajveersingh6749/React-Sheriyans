import React, { useState } from 'react'

function App() {
  const [a, b] = useState(69);
  return (  
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      <h1>{a+11}</h1>
      <button className='bg-green-500 text-white px-3 py-1 rounded-md text-xs' onClick={() => b(a+1)}>Click</button>  
    </div>
  )
}

export default App
