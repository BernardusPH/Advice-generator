import { motion } from "framer-motion";
import classes from "./AdviceQuote.module.css";
interface AdviceQuote {
  disableButton: boolean;
  quote: string;
}
const loadingContainerVariants = {
  visible: {
    transition: {
      when: "beforechildren",
      staggerChildren: 0.2,
    },
  },
};

const loadingDotVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 1, 0, 1],
  },
};

const LoadingComponent = () => {
  return (
    <div>
      LOADING
      <motion.span
        variants={loadingContainerVariants}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3, 4].map((index) => (
          <motion.span
            key={index}
            variants={loadingDotVariants}
            transition={{
              repeat: Infinity,
              repeatDelay: .5,
              duration:2
            }}
          >
            .
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};
console.log(LoadingComponent);

const AdviceQuote = ({ disableButton, quote }: AdviceQuote) => {
  const displayQuote =
    quote === "" ? "Please press the button to get advice" : quote;
  return (
    <motion.div
      key={quote}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={classes["advice-quote"]}
    >
      {disableButton ? <LoadingComponent /> : <q>{displayQuote}</q>}
    </motion.div>
    
  );
};

export default AdviceQuote;
