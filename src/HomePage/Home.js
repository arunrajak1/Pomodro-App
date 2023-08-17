import React from "react";
import UserLogin from "../Auth0/UserLogin";
import TimerApp from "../Componets/Timer";
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <div>
        <UserLogin></UserLogin>
      </div>

      { isAuthenticated ? (
        <TimerApp></TimerApp>
      ) : 
      (  
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-semibold text-center ">
          Please log in to view your Pomodro Timer App
          </h2>
        </div>
        
      
      )}
    </div>
  );
};

export default Home;
