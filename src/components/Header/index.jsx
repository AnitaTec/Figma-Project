import Cooljob from "../../assets/Cooljob.svg";
import styles from "./styles.module.css";
import SearchBar from "../searchBar";
import Rectangle from "../../assets/Rectangle.svg";
import Gisney from "../../assets/Gisney.svg";
import CocaCola from "../../assets/CocaCola.svg";
import Facebook from "../../assets/Facebook.svg";
import Microsoft from "../../assets/Microsoft.svg";
import Sony from "../../assets/Sony.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.leftGroup}>
          <img src={Cooljob} alt="Cooljob logo" className={styles.logo} />
          <a href="">Поиск работы</a>
          <a href="">Поиск стартапов</a>
        </div>

        <div className={styles.authButtons}>
          <a href="">Регистрация</a>
          <button>Вход</button>
        </div>
      </div>
      <SearchBar />
      <div className={styles.bottomNav}>
        <p>Помогаем найти работу:</p>
        <div className={styles.icons}>
          <img src={Gisney} alt="Gisney" />
          <img src={Facebook} alt="Facebook" />
          <img src={Microsoft} alt="Microsoft" />
          <img src={Sony} alt="Sony" />
          <img src={CocaCola} alt="CocaCola" />
        </div>
      </div>
    </div>
  );
}

export default Header;
