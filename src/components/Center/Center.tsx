import React, { useContext } from 'react'
import { MathContext } from '../../components/MathContext'
import classes from './Center.module.scss'

const Center = () => {

  const ctx = useContext(MathContext)

  return (
    <section className={classes.center}>
      <div className={classes.mathArea} data-testid='mathArea'>
        <p className={classes.question} data-testid='question'>{`${ctx?.math.q1} + ${ctx?.math.q2}`}</p>
        <p className={classes.answer} data-testid='answer'>{ctx?.math.answer}</p>
      </div>
      <div className={classes.infoArea} data-testid='infoArea'>
        <p className={classes.count}>問題数</p>
        <p className={classes.timer}>経過時間</p>
      </div>
    </section>
  )
}

export default Center