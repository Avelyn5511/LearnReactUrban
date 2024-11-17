import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
import style from "./style.module.css";

function CopyRight() {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
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
      <div className={style.rightContainer}>
        © 2024 Damien Braun Photography. All rights reserved.
      </div>
    </div>
  );
}

export default CopyRight;
