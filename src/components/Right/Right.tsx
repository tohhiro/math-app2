import React from 'react'
import classes from './Right.module.scss'

const Right = () => {
  return (
    <section className={classes.right}>
      <button 
        className={classes.resetBtn} 
        data-testid="resetBtn"
      >
          Reset
      </button>
    </section>
  )
}

export default Right