import React from 'react'
import classes from './Left.module.scss'

const Left = () => {
  return (
    <section className={classes.left}>
      <button className={classes.plusClearBtn}>+/clear</button>
    </section>
  )
}

export default Left