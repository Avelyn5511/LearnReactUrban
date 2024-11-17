import stars from "../../../assets/Event Stars.svg";
import style from "./style.module.css";

interface Event {
  id: number;
  event: string;
}

function EventRoadFoot() {
  const eventNameFoot: Event[] = [
    { id: 1, event: "Event Photography" },
    { id: 2, event: "Commercial Photography" },
    { id: 3, event: "Product Photography" },
    { id: 4, event: "Wedding Photography" },
    { id: 5, event: "Landscape Photography" },
    { id: 6, event: "Branding Photography" },
    { id: 7, event: "Portrait  Photography" },
  ];

  return (
    <div className={style.container}>
      <div className={style.marqueeContent}>
        {eventNameFoot.map((name) => (
          <div className={style.eventRoad} key={name.id}>
            <img src={stars} alt="Star icon" className={style.imgStar} />
            <div>{name.event}</div>
          </div>
        ))}
        {eventNameFoot.map((name) => (
          <div className={style.eventRoad} key={`duplicate-${name.id}`}>
            <img src={stars} alt="Star icon" className={style.imgStar} />
            <div>{name.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventRoadFoot;
