import React, { useState } from 'react'
import Product from './Product'
function App() {
  const [a, b] = useState(69);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      <Product age={a} data={{name: 'John', age: 20}} />
    </div>
  )
}

export default App