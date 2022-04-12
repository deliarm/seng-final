import ChatAppClient from "../components/chatApp/client/src/App"
import "./home.css"

import React from 'react'

function home({user}) {
  return (
    <div className="homepage">
      <div className="right">
      {/* Chat application was taken and modified from: https://github.com/machadop1407/react-socketio-chat-app */}
      <ChatAppClient user = {user}/>
      </div>
      <div className="left">
        <h1>Favorites</h1>
      </div>
    </div>
  )
}

export default home