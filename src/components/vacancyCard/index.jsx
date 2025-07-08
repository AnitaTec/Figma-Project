import styles from "./styles.module.css";
import Location from "../../assets/Location.svg";

function VacancyCard({ item }) {
  if (!item) {
    return null;
  }

  return (
    <div className={styles.main}>
      <div className={styles.circle} style={{ backgroundColor: item.color }}>
        <p>{item.category}</p>
      </div>

      <h4>{item.vacancyCardText}</h4>

      <div className={styles.info}>
        <div className={styles.location}>
          <img src={Location} alt="Локация" />
          <p>{item.location}</p>
        </div>

        <div className={styles.company}>
          <img src={item.company} alt={item.companyName} />
          <p>{item.companyName}</p>
        </div>
      </div>
    </div>
  );
}

export default VacancyCard;
