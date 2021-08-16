import React, { useState, useEffect } from 'react'

const SingleColor = ({index,weight,rgb,hexColor}) => {
  const [alert,setAlert] =useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`
  const handleClick=(e)=>{
    e.preventDefault()
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
      return ()=> clearTimeout(timeout)
    },1000)
  })
  return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={handleClick}>
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hexValue}</p>
    {alert && <p className="alert">copied to clipboard</p>}
  </article>
}

export default SingleColor
