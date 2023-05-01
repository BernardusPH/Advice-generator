import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://www.frontendmentor.io/profile/BernardusPH">
        Bernard Hechter
      </a>
      .
    </footer>
  );
};

export default Footer;
