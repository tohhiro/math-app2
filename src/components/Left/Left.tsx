import React, { useContext } from 'react'
import { MathContext } from '../../components/MathContext'
import classes from './Left.module.scss'

const Left = () => {
  const ctx = useContext(MathContext)

  return (
    <section className={classes.left}>
      <button 
        className={classes.plusClearBtn} 
        data-testid="plusClearBtn"
        onClick={ctx?.handleMath}
      >
          {ctx?.math.button}
      </button>
    </section>
  )
}

export default Left