
import classes from "./AdviceId.module.css";

interface AdviceIdProps{
    id:number;
    disableButton:boolean
}
const AdviceId = ({id,disableButton}:AdviceIdProps) => {
  return (
    <>
   <h1 className={classes["advice-id"]}> Advice {id<0 || disableButton? `???`: `#${id}`} </h1> 
    </>
  )
}

export default AdviceId
