
import React, { useEffect, useState } from 'react'

const App = () => {
  const [box, setbox] = useState({x:0,y:0})
function boxhandler(event){
if(event.key === 'ArrowRight'   ){
  setbox((prev)=>{
if(prev.x <= window.innerWidth){
  return({x:prev.x + 10 ,y:prev.y})
}
else{
 return ({x:prev.x,y:prev.y})
}
    
  })
}
else if(event.key === 'ArrowLeft' ){
  setbox((prev)=>{
    if(prev.x > window.innerWidth){
     return {x:prev.x -1 ,y:prev.y}
    }
    else{
      return {x:prev.x ,y:prev.y}
    }
  })
}
else if(event.key === 'ArrowUp'){
  setbox((prev)=>({x:prev.x,y:prev.y +1}))
}
else if(event.key === 'ArrowDown'){
  setbox((prev)=>({x:prev.x,y:prev.y - 1}))
}
}
useEffect(() => {

window.addEventListener('keydown',boxhandler)
  return () => {
    window.removeEventListener('keydown',boxhandler)
  }
}, [])

  
  return (
    <div className='w-full h-screen bg-slate-300'>
 
      <div className='box w-20 h-20 bg-slate-500 ' style={{transform: `translate(${box.x}%, ${box.y}%)`}}></div>
    
    </div>
  )
}

export default App
