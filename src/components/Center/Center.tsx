import React from 'react'
import classes from './Center.module.scss'

const Center = () => {
  return (
    <section className={classes.center}>
      <p>問題</p>
      <p>答え</p>
      <p>正解数</p>
       <p>経過時間</p>
    </section>
  )
}

export default Center