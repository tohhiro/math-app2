import React,{createContext, ReactNode, useState} from 'react'

type Props  = {
  children: ReactNode
}

type QuestionType = {
  q1: number | null
  q2: number | null
  answer: string
  button: string
}

type StateProps = {
  math: QuestionType
 // setMath: React.Dispatch<React.SetStateAction<QuestionType>>
 handleMath: () => void
}

const create4digit = () => {
  return Math.floor(Math.random() * 10000)
}

export const MathContext = createContext<StateProps|null>(null)

export const MathContextComponent: React.FC<Props> = ({children}) => {

  const initialValue = {q1: null, q2: null, answer: '', button: "start"}
  const [math, setMath] = useState<QuestionType>(initialValue)
  


  const handleMath = () => {
  //  let q1: number | null, q2: number | null, answer: string, button: string
    let q1, q2, answer, button

    if(math.button === 'start' || math.button === '+'){
       q1 = create4digit()
       q2 = create4digit()
       answer = String(q1 + q2)
       button = "+"
    }else{
       q1 = math.q1
       q2 = math.q2
       answer = "考え中"
       button = "reset"
    }
 
    setMath({q1: q1, q2: q2, answer: answer, button: button})
  }
 
  return (
     <MathContext.Provider value={{math,handleMath}}>
      {children}
     </MathContext.Provider>
  )
}