import React from 'react'
import classes from './Header.module.scss'

const Header = () => {
  return (
    <header 
      className={classes.header}
      data-testid="header"
    >
      Math-App2
    </header>
  )
}

export default Header