import cooljob from "../../assets/Cooljob.svg";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.leftGroup}>
          <img src={cooljob} alt="Cooljob logo" className={styles.logo} />
          <a href="">Поиск работы</a>
          <a href="">Поиск стартапов</a>
        </div>

        <div className={styles.authButtons}>
          <a href="">Регистрация</a>
          <button>Вход</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
