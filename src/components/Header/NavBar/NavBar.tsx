import HeaderNavigation from "./HeaderNavigation/HeaderNavigation.tsx";
import style from "./style.module.css";

function NavBar() {
  // @ts-ignore
  return (
    <>
      <div className={style.container}>
        <HeaderNavigation />
      </div>
    </>
  );
}

export default NavBar;
