import firstTitleIcon from "../../../../assets/Icon firstTitle.svg";
import titleVector from "../../../../assets/VectorTitle.png";
import style from "./style.module.css";

function TitleSlogan() {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <h3 className={style.inPhoto}>Stunning Photography by</h3>
        <h2 className={style.Photograph}>Damien Braun</h2>
      </div>
      <div className={style.centerContainer}>
        <img className={style.vector} src={titleVector} alt={titleVector} />
      </div>
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
  );
}

export default TitleSlogan;
