import React from 'react'
import './LastUpdate.css'

const LastUpdate = ({ updateTime }) => {
  return <div className="lastUpdate">Last updated at: {updateTime}</div>
}

export default LastUpdate
