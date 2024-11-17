import titleImg from "../../../assets/titleIMG.png";
import style from "./style.module.css";

function Title() {
  return (
    <div className={style.container}>
      <img src={titleImg} alt={titleImg} />
    </div>
  );
}

export default Title;
