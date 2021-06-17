import * as React from "react"
import {useEffect, useState} from "react";
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { navItems } from "../data"

const MobileNav = () => {

  const length = Object.keys(navItems).length
  const [isOpen, setIsOpen] = useState(false)
  const classes = [
    'mobile-nav-container',
    isOpen ? 'nav-open' : ''
  ]

  useEffect(() => {

    if(isOpen) {
      document.getElementsByTagName('body')
    }

  }, [isOpen]);

  return (
  <div className={classes.join(' ')} onClick={() => setIsOpen(!isOpen)}>

    <button onClick={() => setIsOpen(!isOpen)} className='trigger-open'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
           className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      </svg>
    </button>

    <div className={'mobile-nav'}>
      <button className='trigger-close' onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
             viewBox="0 0 16 16">
          <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      <nav>
        {navItems.map(({ route, title }, index) =>
          <span key={index}>
          <Link
            to={route}>
            {title}
          </Link>
          </span>)}
      </nav>
    </div>
  </div>
)}


export default MobileNav;