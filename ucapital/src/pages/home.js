import ChatAppClient from "../components/chatApp/client/src/App"

import React from 'react'

function home({user}) {
  return (
    <div className="homepage">
      <ChatAppClient user = {user}/>
    </div>
  )
}

export default home