import React from 'react'
import { Link } from "react-router-dom"
import Feed from '../reusables/Feed'

export default function PlaceItem({place}) {
  return (
    <Link to={'profile/' + place.id}>
        <Feed person={place} />
    </Link>
  )
}
