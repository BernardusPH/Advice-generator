import {motion} from "framer-motion"
import classes from "./AdviceQuote.module.css"
interface AdviceQuote {
  disableButton: boolean;
  quote: string;
}

const AdviceQuote = ({ disableButton, quote }: AdviceQuote) => {
  const displayQuote =quote === "" ? "Please press the button to get advice" : quote;
  return <motion.div key={quote} initial={{scale:0}} animate={{scale:1}} className={classes["advice-quote"]}>{disableButton ? "LOADING...." : <q>{displayQuote}</q> }</motion.div>;
};

export default AdviceQuote;
