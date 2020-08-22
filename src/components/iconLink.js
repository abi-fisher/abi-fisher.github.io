import React from "react"
import { Link } from "gatsby"

function IconLink(props) {
  return (
    <Link className="icon-link" to={props.to}>
      <img className="icon-link-icon" src={props.image} alt={props.label}/>
      <h2>{props.label}</h2>
    </Link>
  ); 
}

export default IconLink
