import { MouseEventHandler } from 'react'
// import { MouseEventHandler} from "react"

export interface CustomBottonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit' | 'reset' | undefined
}
