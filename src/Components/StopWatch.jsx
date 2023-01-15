import React, { useState,useEffect } from 'react'

const StopWatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setimer] = useState(false);

  useEffect(() => {
    let intervalId = null
    
      if (timer) {
        intervalId = setInterval(() => {
          if (seconds > 3) {
            setSeconds(0);
            setMinutes((prev) => (prev + 1))
          }
          else if (minutes > 3) {
            setMinutes(0);
            setHours((prev) => (prev + 1))
          }

          else {
            setSeconds((prev) => (prev + 1));
          }

        }, 1000)
      }
    
    else {
      clearInterval(intervalId);
    }

    // return () => {
    //   clearInterval(intervalId);
    // }
  }, [timer, seconds,minutes])




  return (

    <>
      <h2>StopWatch</h2>
      <div>{hours}:{minutes}:{seconds}</div>
      <button onClick={()=>setimer(true)}>Start</button>
      <button onClick={()=>setimer(false)}>Stop</button>
      <button onClick={()=>{setimer(false);setSeconds(0);setHours(0);setMinutes(0)}}>Reset</button>
    </>





  )
}

export default StopWatch