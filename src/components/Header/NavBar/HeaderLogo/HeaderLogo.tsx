import logo from "../../../../assets/HeaderLogo.svg";
import style from "./style.module.css";

function HeaderLogo() {
  return (
    <div className={style.container}>
      <img src={logo} alt="Logo" className={style.logo} />
    </div>
  );
}

export default HeaderLogo;
