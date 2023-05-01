
import classes from "./AdviceQuote.module.css"
interface AdviceQuote {
  disableButton: boolean;
  quote: string;
}
// &ldquo; &rdquo;
const AdviceQuote = ({ disableButton, quote }: AdviceQuote) => {
  const displayQuote =quote === "" ? "Please press the button to get advice" : quote;
  return <div className={classes["advice-quote"]}>{disableButton ? "LOADING...." : <q>{displayQuote}</q> }</div>;
};

export default AdviceQuote;
