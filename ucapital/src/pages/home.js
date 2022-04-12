import ChatAppClient from "../components/chatApp/client/src/App"

import React from 'react'

function home({user}) {
  return (
    <div className="homepage">
      {/* Chat application was taken and modified from: https://github.com/machadop1407/react-socketio-chat-app */}
      <ChatAppClient user = {user}/>
    </div>
  )
}

export default home