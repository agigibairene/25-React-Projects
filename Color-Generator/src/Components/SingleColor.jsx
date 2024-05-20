/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react'
// import rgbToHex from './utils'


// eslint-disable-next-line react/prop-types
const SingleColor = ({ weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);

  // Adding # to the hex color
  const HexColor = `#${hexColor}`
  
  // Copying hex color on Click
  function handleCopy(){
    setAlert(true);
    navigator.clipboard.writeText(HexColor)
  }

  useEffect(() =>{
    const timeOut = setTimeout(() =>{
      setAlert(false);
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [alert]);

  return (
    <>
       <article 
        style={{backgroundColor: `#${hexColor}`, 
        color:`${index > 7 ? "#fff" : "000"}`}}
        onClick={handleCopy}
      >
          <p className="percent-value">{weight}%</p>
          <p className="color-value">#{hexColor}</p>
          {alert && <p>Copied to clipboard</p>}
       </article>
    </>
  )
}

export default SingleColor