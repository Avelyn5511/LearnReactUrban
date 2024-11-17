import arrow from "../../../assets/arrow.svg";
import first from "../../../assets/CardFirst.png";
import second from "../../../assets/CardSecond.png";
import thread from "../../../assets/CardThrid.png";
import style from "../MyPhotoCard/style.module.css";

function MyPhotoCard() {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <p className={style.titleUp}>Portfolio</p>
        <p className={style.titleDown}>Explore My photography work.</p>
        <div className={style.btnMore}>
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
        <button className={style.btnAllServices}>
          View All Services -{">"}
        </button>
      </div>
      <div className={style.containerCard}>
        <div className={style.card}>
          <img src={first} alt={first} />
          <div className={style.disCard}>
            <h3 className={style.titleCard}>Faces of Resilience</h3>
            <p className={style.dateCard}>March 2022</p>
          </div>
          <button className={style.btnCard}>
            View Project
            <img src={arrow} alt={arrow} />
          </button>
        </div>
        <div className={style.card}>
          <img src={second} alt={second} />
          <div className={style.disCard}>
            <h3 className={style.titleCard}>A Wedding Tale</h3>
            <p className={style.dateCard}>January 2020</p>
          </div>
          <button className={style.btnCard}>
            View Project
            <img src={arrow} alt={arrow} />
          </button>
        </div>
        <div className={style.card}>
          <img src={thread} alt={thread} />
          <div className={style.disCard}>
            <h3 className={style.titleCard}>Product Elegance</h3>
            <p className={style.dateCard}>January 2020</p>
          </div>
          <button className={style.btnCard}>
            View Project
            <img src={arrow} alt={arrow} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyPhotoCard;
