import classes from "./Button.module.css"
import { ReactNode } from 'react';
import {motion} from "framer-motion"
interface ButtonProps{
    disabled:boolean;
    onClick:()=>void;
    className:string
    children:ReactNode;
    ar_label:string;
}

const Button = ({disabled,onClick,className,children,ar_label}:ButtonProps) => {
  return (
    <motion.button aria-label={ar_label} whileHover={{boxShadow:"0 0 40px var(--Neon-Green)"}} disabled={disabled} onClick={onClick} className={classes[className]} >{children}</motion.button>
  )
}

export default Button
