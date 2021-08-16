import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('')
  const [error,setError] = useState(false)
  const [list,setList] = useState(new Values('#0d3980').all(10))
  const handleClick=(e)=>{
    e.preventDefault()
    try{
    const colors = new Values(color).all(10)
    setList(colors)
    }
    catch(error){
      console.log(error)
      setError(true)
    }
  }
  return <>
  <section className="container">
    <h3>color generator</h3>
    <form  onSubmit={handleClick}>
      <input placeholder="#0d3980" className={`${error ? 'error' : 'null'}`} type="text" value={color} onChange={(e)=>setColor(e.target.value)} />
      <button type="submit" className="btn">Submit</button>
    </form>
  </section>
  <section className="colors">
    {
      list.map((color,i)=>{
        return<SingleColor className="color" key={i} index={i} {...color} hexColor={color.hex} />
      })
    }
  </section>
  </>
}

export default App
