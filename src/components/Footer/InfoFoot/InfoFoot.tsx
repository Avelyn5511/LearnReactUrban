import imgFoot from "../../../assets/footerImg.png";
import firstTitleIcon from "../../../assets/Icon firstTitle.svg";
import style from "./style.module.css";

function InfoFoot() {
  return (
    <div className={style.container}>
      <div className={style.containerFooter}>
        <p>A more meaningful home for photography</p>
        <div className={style.rightContainer}>
          <h3 className={style.firstTitle}>
            Let’s
            <button className={style.titleButton}>
              <img src={firstTitleIcon} alt={firstTitleIcon} />
            </button>
          </h3>
          <h2 className={style.SecondTitle}>Work Together</h2>
        </div>
      </div>
      <div className={style.containerNavigation}>
        <div className={style.imgLeft}>
          <img src={imgFoot} alt={imgFoot} />
        </div>
        <div className={style.imgRight}>
          <img src={imgFoot} alt={imgFoot} />
        </div>
        <p className={style.footerTitleHome}>
          <h3>Home</h3>
          <a>About Me</a>
          <a>My Works</a>
          <a>Testimonials</a>
        </p>
        <p className={style.footerTitleClients}>
          <h3>Clients</h3>
          <a>Klovesto</a>
          <a>Nukeway</a>
          <a>Cloven's</a>
          <a>MenVol</a>
        </p>
        <p className={style.footerTitlePortfolio}>
          <h3>Portfolio</h3>
          <a>Events</a>
          <a>Portrait</a>
          <a>Branding</a>
          <a>Commercial</a>
          <a>Wedding</a>
        </p>
        <p className={style.footerTitleServices}>
          <h3>Services</h3>
          <a>Portraits</a>
          <a>Events</a>
          <a>Commercial </a>
        </p>
      </div>
    </div>
  );
}

export default InfoFoot;
