import photoMe from "../../../assets/AboutMe Photo.png";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import star from "../../../assets/starForm.svg";
import twitter from "../../../assets/twitter.svg";
import style from "./style.module.css";

function AboutMe() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <p className={style.topTitle}>ABOUT</p>
        <p className={style.downTitle}>I AM DAMIEN</p>
        <button className={style.butTitle}>Know More -{">"}</button>
        <div className={style.containerForm}>
          <div className={style.myPhoto}>
            <img src={photoMe} alt={photoMe} />
          </div>
          <div className={style.titleFormDisc}>
            <p className={style.titleTextUp}>
              <img src={star} alt={star} /> Introduction
            </p>
            <p className={style.titleText}>
              My journey as a photographer has been a lifelong quest to capture
              the extraordinary in the ordinary, to freeze fleeting moments in
              time, and to share the world's beauty as I see it. Based in the
              enchanting landscapes of the USA, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and
              every frame is a piece of my heart.
            </p>
            <div className={style.wrapperForm}>
              <p className={style.titleTextDown}>
                <img src={star} alt={star} />
                Contact Information
              </p>
              <label className={style.emailForm}>
                Email
                <input
                  className={style.inputEmail}
                  type="email"
                  placeholder={"damienbraun@gmail.com"}
                />
              </label>
              <label className={style.phoneForm}>
                Phone Number
                <input
                  className={style.inputPhone}
                  type="tel"
                  placeholder={"+00 000000000"}
                  pattern="\+?[0-9\s\-()]{7,}"
                  required
                />
              </label>
              <button className={style.lets}>Let’s Work</button>
              <button className={style.download}>Download CV</button>
              <div className={style.containerNetWorks}>
                <a href={"#"}>
                  <img src={facebook} alt={facebook} />
                </a>
                <a href={"#"}>
                  <img src={twitter} alt={twitter} />
                </a>
                <a href={"#"}>
                  <img src={instagram} alt={instagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
