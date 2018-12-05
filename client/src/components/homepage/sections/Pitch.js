import React from 'react'
import '../Homepage.scss'

export default function Pitch() {
  return (
    <div className="split-screen-sect">
      <div className="split-screen-lhs">
        <div className="hp-sect-title">Elegance</div>
        <div className="hp-sect-subtitle">Create the right atmosphere for the occassion</div>
        <ul className="hp-sect-content">
            <li>Bellevoye bears the name of a road, the least traveled by, a path that one barely sees and that carries the promise of dawn, a destination shaped like a dream.</li>
            <li>Jean and Alexandre designed this dream, placing their faith at the very heart of it, faith in the strength of their culture and country, France.</li>
            <li>They have made this dream come true with a crazy and audacious bet. It was born from a will to create, innovate, and push the boundaries: producing a great French whisky, with all of our skills and know-how, our terroirs and our raw materials.</li>
            <li>They have built this dream though strong values and the wish to establish a virtuous circle around their whisky, from suppliers to partners through retailers and customers.</li>
            <li>Some stories are meant to be told, dreams must become true, otherwise they are doomed to remain no more than beautiful ideas.</li>
        </ul>
      </div>
      <div className="split-screen-rhs"></div>
    </div>
  )
}
