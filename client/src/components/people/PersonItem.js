import React from 'react'
import { Link } from "react-router-dom"
import Feed from '../reusables/Feed'

export default function PersonItem({person}) {
  return (
    <Link to={'profile/' + person.id}>
        <Feed person={person} />
    </Link>
  )
}
