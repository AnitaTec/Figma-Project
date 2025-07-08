import styles from "./styles.module.css";
import Location from "../../assets/Location.svg";
import Search from "../../assets/Search.svg";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <p>
        Один клик <br /> и работа в кармане
      </p>

      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <img src={Location} className={styles.icon} alt="Location icon" />
          <input type="text" placeholder="Город, Страна" />
        </div>

        <div className={styles.inputWrapper}>
          <img src={Search} className={styles.icon} alt="Search icon" />
          <input type="text" placeholder="Должность или компания" />
        </div>

        <button className={styles.searchButton}>Поиск</button>
      </div>
    </div>
  );
}

export default SearchBar;
