import React from "react"
import { useUsers } from "../hooks"
import "../styles/Main.css"
import Icon from "../lib/Icon"
import { Link } from "react-router-dom"

const Main = props => {
  const { user, going, addAttendie, removeAttendie, notgoing } = useUsers()
  console.log("==> going", going)
  console.log("notgoing =======<<<<", notgoing)
  return (
    <div className="main-container">
      <ul className="attendie-count">
        <Link to="/notgoing" className="notgoing-button">
          <li className="notgoing">Not Going: {notgoing.length}</li>
        </Link>
        <Link to="/going" className="going-button">
          <li className="going">Going: {going.length}</li>
        </Link>
      </ul>
      {user.map((user, i) => (
        <div key={`User-${i}`}>
          <img
            src={user.picture.large}
            alt={user.name.first + " " + user.name.last}
          />
          <ul className="user-details">
            <li>
              {user.name.first}&nbsp;{user.name.last}
            </li>
            <li>{user.phone}</li>
            <li>{user.email}</li>
          </ul>
          <div className="buttons">
            <button className="close" onClick={event => removeAttendie(user)}>
              <Icon icon="times" />
            </button>
            <button className="checkmark" onClick={event => addAttendie(user)}>
              <Icon icon="check" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Main
