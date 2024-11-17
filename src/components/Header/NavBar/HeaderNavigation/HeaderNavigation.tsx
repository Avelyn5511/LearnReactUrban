import ContactMe from "../ContactMe/ContactMe.tsx";
import HeaderLogo from "../HeaderLogo/HeaderLogo.tsx";
import style from "./style.module.css";

function HeaderNavigation() {
  return (
    <>
      <nav className={style.container}>
        <div className={style.border}>
          <button className={style.itemHome}>
            <a className={style.homeFont} href="#">
              Home
            </a>
          </button>
          <button className={style.itemAbout}>
            <a href="#">About Me</a>
          </button>
          <button className={style.itemPortfolio}>
            <a href="#">Portfolio</a>
          </button>
          <button className={style.itemServices}>
            <a href="#">Services</a>
          </button>
        </div>
        <HeaderLogo />
        <ContactMe />
      </nav>
    </>
  );
}

export default HeaderNavigation;
