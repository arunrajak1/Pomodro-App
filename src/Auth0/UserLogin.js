import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
const UserLogin = () => {

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  
  return (

    <div className=' mx-aut0 flex flex-col items-end justify-end  md:flex-row mt-5 '>
   {
          isAuthenticated && (
            <div className=" flex items-end justify-end mr-5 ">
              <img className='w-10 h-10 rounded-full mr-4 ' src={user.picture} alt={user.name} />
              <h2 className="text-lg font-semibold mr-2">{user.name}</h2>
            </div>
          )
        }
        {
          isAuthenticated ?
            (
              <button className="inline-flex items-center bg-blue-600  border-0 py-2 px-4 text-white focus:outline-none hover:bg-indigo-700 rounded text-base  mr-4 md:mt-0" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            ) :
            (
              <button className="inline-flex items-center bg-blue-600  border-0 py-2 px-4 text-white focus:outline-none hover:bg-indigo-700 rounded text-base  mr-4 md:mt-0"onClick={() => loginWithRedirect()}>Log In</button>
            )
        }
    </div>
  
  )
}

export default UserLogin
