import React, { useState } from "react";

function Products( {age, data} ) {
    const [a, b] = useState(false);
  return (
    <div className="text-white w-full h-60 bg-zinc-800 p-5 rounded-md">
      <h4>{a === false ? "hello" : "world"}</h4>
      <button className={`${a === false ? "bg-green-500" : "bg-red-500"} text-white px-3 py-1 rounded-md text-xs`} onClick={() => b(!a)}>Change</button>
    </div>
  );
}

export default Products;
