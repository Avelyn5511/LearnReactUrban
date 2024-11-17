import logo from "../../../assets/logo footer.png";
import style from "./style.module.css";

function LogoMain() {
  return (
    <div className={style.container}>
      <img src={logo} alt={logo} />
    </div>
  );
}

export default LogoMain;
