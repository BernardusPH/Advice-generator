import classes from "./Button.module.css"
import { ReactNode } from 'react';
import {motion} from "framer-motion"
interface ButtonProps{
    disabled:boolean;
    onClick:()=>void;
    className:string
    children:ReactNode;
}
// box-shadow: 0 0 40px var(--Neon-Green);
const Button = ({disabled,onClick,className,children}:ButtonProps) => {
  return (
    <motion.button whileHover={{boxShadow:"0 0 40px var(--Neon-Green)"}} disabled={disabled} onClick={onClick} className={classes[className]} >{children}</motion.button>
  )
}

export default Button
