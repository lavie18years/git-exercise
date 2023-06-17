import React, { Component } from "react";
import { Players } from "../Shared/ListOfPlayers";
import { useState } from "react";
import { Link } from 'react-router-dom'
export default function Film() {
  const [player, setPlayer] = useState([]);
  return (
    <div class="content">
        {Players.map((player) => (
          <div key={player.id}>
            <div className='box'>
              <div className="card">
                <img src={player.img} />
              </div>
              <h3>{player.name}</h3>
              <p>{player.club}</p>
              <Link to={`detail/${player.id}`}>
                <p className="but"><button>Detail</button></p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}