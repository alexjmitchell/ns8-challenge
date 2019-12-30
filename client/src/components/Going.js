import React from "react"
import Card from "./Card"
import "../styles/SidePages.css"
import { Link } from "react-router-dom"
import { useUsers } from "../hooks"

const Go = props => {
  const { going } = useUsers()
  return (
    <>
      <div className="header-container">
        <Link to="/" className="home-button">
          &larr;
        </Link>
        <h1 className="Main-Title">Going</h1>
      </div>
      <div className="invite-list">
        {going.map((person, i) => (
          <Card
            source={person.user.picture.large}
            name={`${person.user.name.first} ${person.user.name.last}`}
            phone={person.user.phone}
            email={person.user.email}
          />
        ))}
      </div>
    </>
  )
}

export default Go
