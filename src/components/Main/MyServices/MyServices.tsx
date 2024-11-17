import stars from "../../../assets/Event Stars.svg";
import firstTitleIcon from "../../../assets/Icon firstTitle.svg";
import imgService from "../../../assets/Services Photo.png";
import style from "./style.module.css";

function MyServices() {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <p className={style.titleUp}>Services</p>
        <p className={style.titleDown}>My Photography Services</p>
        <div className={style.btnMore}>
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
        <button className={style.btnAllServices}>
          View All Services -{">"}
        </button>
        <div className={style.photoCard}>
          <img src={imgService} alt={imgService} />
        </div>

        <div className={style.containerDis}>
          <h2 className={style.titleDis}>
            Events
            <button className={style.btnTitleDis}>
              <img src={firstTitleIcon} alt={firstTitleIcon} />
            </button>
          </h2>
          <p className={style.titleText}>
            Our event photography service is dedicated to capturing the magic of
            your special occasions. Whether it's a wedding, corporate event, or
            milestone celebration, we're there to document every heartfelt
            moment. We blend into the background, ensuring natural and candid
            shots that reflect the emotions of the day.
          </p>
          <h4 className={style.titleUl}>Service Highlights</h4>
          <ul>
            <li>
              <img src={stars} alt="Star icon" className={style.imgStar} />
              Coverage for weddings, parties, corporate functions, and more.
            </li>
            <li>
              <img src={stars} alt="Star icon" className={style.imgStar} />
              Skilled photographers who know how to seize the moment.
            </li>
            <li>
              <img src={stars} alt="Star icon" className={style.imgStar} />A mix
              of candid and posed shots for a comprehensive story.
            </li>
            <li>
              <img src={stars} alt="Star icon" className={style.imgStar} />
              Quick turnaround for you to relive the day's highlights.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
