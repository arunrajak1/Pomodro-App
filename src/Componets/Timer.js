import React, { useState,useEffect } from "react";
import {} from "../index.css";
import UserLogin from "../Auth0/UserLogin";
const TimerApp = () => {
  const [time, setTime] = useState(1500); // 25 minutes in secound
  const [isActive, SetIsActive] = useState(false); //check timer is active or not
  const [isbreak,setIsBreak]=useState(false)
  const [breakmsg, setBreakMsg] = useState(false);


  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
    
    //Timer complete
    else if(isActive && time === 0){
     clearInterval(interval);

     if(!isbreak){
      setIsBreak(true)
      setBreakMsg(true)
      setTime(5*60);
     }
     else{
      // setTime(1500)
      SetIsActive(false)
      setIsBreak(false)
      setBreakMsg(false)
     }
    }
    return()=>{
      clearInterval(interval)
    }
   
   
  }, [isActive,time,isbreak,breakmsg]);

  //for start button
  const setTimer=()=>{
    SetIsActive(true);
 
  }

  //for pause button
  const setPause=()=>{
    SetIsActive(false)
  }

  const setReset=()=>{
    SetIsActive(false)
    setIsBreak(false)
    setTime(1500)
    setBreakMsg(false); 

  }


  //time formate
  const TimeFormate=second=>{
    const minutes=Math.floor(second/60);
    const remainingSecond=Math.floor(second % 60);

    return `${minutes}:${remainingSecond <10 ? '0': " "}${remainingSecond}`;

  }

  return (

    <div className="flex flex-col items-center justify-center  h-screen">
       <h2 className="text-6xl mb-10">Pomodro Timer</h2> 
       <h2 className="text-4xl mb-8">{TimeFormate(time)}</h2> 
       {breakmsg? (
          <div className="mb-4 text-green-500 font-semibold">
            Time for a 5-minute break!
          </div>
        ) : null}
      <div className="flex space-x-4">
      <button className="rounded-full   bg-green-500 hover:bg-sky-400 text-xl py-2 px-4 " onClick={setTimer} disabled={isActive}>Start</button>
      <button className="rounded-full bg-yellow-500 hover:bg-sky-400  text-xl py-2 px-4" onClick={setPause}>Pause</button>
      <button className="rounded-full bg-red-600  hover:bg-gray-400 text-xl py-2 px-4 " onClick={setReset} disabled={isActive || isbreak}>Reset</button>
      </div>
    </div>
  );
};

export default TimerApp;
