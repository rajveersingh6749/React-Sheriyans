import React from 'react'

function Product( {age, data} ) {
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
        <h1>{age}</h1>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
    </div>
  )
}

export default Product
