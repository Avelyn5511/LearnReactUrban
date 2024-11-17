import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import stars from "../../../assets/rewStar.svg";
import twitter from "../../../assets/twitter.svg";
import style from "./style.module.css";

function ReviewsMyClient() {
  return (
    <div className={style.container}>
      <div className={style.containerTitle}>
        <p className={style.titleText}>Testimonials</p>
        <p className={style.secondTitleText}>What My Clients Say</p>
        <p className={style.thirdTitleText}>Total Reviews</p>
        <p className={style.fourthTitleText}>323</p>
      </div>
      <div className={style.titleBtn}>
        <div className={style.btnMore}>
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
        <button className={style.btnAllServices}>
          View All Testimonials -{">"}
        </button>
      </div>
      <div className={style.reviewsContainer}>
        <div className={style.containerCard}>
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
          <div className={style.containerText}>
            <p className={style.titleCard}>Emily Johnson</p>
            <p className={style.countryCard}>USA, California</p>
            <img className={style.stars} src={stars} alt={stars} />
            <p className={style.titleParagraph}>
              Damien's photography doesn't just capture moments; it captures
              emotions. Hes work is simply mesmerizing.
            </p>
          </div>
        </div>
        <div className={style.containerCard}>
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
          <div className={style.containerText}>
            <p className={style.titleCard}>John Smith</p>
            <p className={style.countryCard}>USA, California</p>
            <img className={style.stars} src={stars} alt={stars} />
            <p className={style.titleParagraph}>
              Damien has an incredible talent for making every event feel
              effortless, and the results speak for themselves.
            </p>
          </div>
        </div>
        <div className={style.containerCard}>
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
          <div className={style.containerText}>
            <p className={style.titleCard}>Samantha Davis</p>
            <p className={style.countryCard}>USA, California</p>
            <img className={style.stars} src={stars} alt={stars} />
            <p className={style.titleParagraph}>
              I was blown away by Damien's ability to capture the essence of our
              wedding day. Hes photographs are our cherished memories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsMyClient;
