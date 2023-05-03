import { useState } from "react";
import Axios from "axios";
import "./MainComponent.css";
import Button from "../UI/Button/Button.tsx";
import DiceSvg from "../UI/DiceSvg/DiceSvg.tsx";
import AdviceId from "../AdviceId/AdviceId.tsx";
import DesktopDivider from "../../assets/pattern-divider-desktop.svg";
import MobileDivider from "../../assets/pattern-divider-mobile.svg";
import AdviceQuote from "../AdviceQuote/AdviceQuote.tsx";

function MainComponent() {
  const [advice, setAdvice] = useState<{ quote: string; id: number }>({
    quote: "",
    id: -3,
  });
  const [disableButton, setdisableButton] = useState<boolean>(false);

  const generateQuote = (timer: number):void => {
    setTimeout(() => {
      Axios.get("https://api.adviceslip.com/advice")
        .then((resp) => {
          const newId = resp.data.slip.id;

          if (newId !== advice.id) {
            const decodedString = decodeURIComponent(escape(resp.data.slip.advice));
            setAdvice({ quote:decodedString , id: newId });
            setdisableButton(false);
          } else {
            generateQuote(1000);
          }
        })
        .catch(() => {
          setdisableButton(false);
          setAdvice({
            quote: "Error something went wrong, reload page and try again",
            id: -3,
          });
        });
    }, timer);
  };

  function setButtonState() {
    setdisableButton(true);
  }

  return (
    <main className="main-advice-card">
      <AdviceId disableButton={disableButton} id={advice.id} />
      <AdviceQuote disableButton={disableButton} quote={advice.quote} />
      <img
        className="desktop-divider"
        src={DesktopDivider}
        alt="desktop divider"
      />
      <img
        className="mobile-divider"
        src={MobileDivider}
        alt="mobile divider"
      />

      <Button
        className="dice-button"
        disabled={disableButton}
        ar_label={"dice-for-advice"}
        onClick={() => {
          generateQuote(1000);
          setButtonState();
        
        }}
      >
        <DiceSvg disabled={disableButton} />
      </Button>
    </main>
  );
}

export default MainComponent;
