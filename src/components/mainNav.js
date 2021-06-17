import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { navItems } from "../data";

const MainNav = ({isForFooter}) => {

  const length = Object.keys(navItems).length

  return (
  <>
  {navItems.map(({ route, title }, index) =>
    <span key={index}>
    <Link
      to={route}>
      {title}
    </Link>
    {isForFooter && index < length - 1 ? " — " : ""}
    </span>)}
  </>
)}


export default MainNav;