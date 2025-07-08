import VacancyCard from "../vacancyCard";
import Sony from "../../assets/Sony.svg";
import Facebook from "../../assets/Facebook.svg";
import Cola from "../../assets/CocaCola.svg";
import styles from "./styles.module.css";
function VacancyCardList() {
  const vacancyCardsData = [
    {
      color: "#5182FF",
      category: "Финансы",
      vacancyCardText: "Менеджер по управлению финансами в крупной компании",
      location: "Осака, Япония",
      company: Sony,
      companyName: "Sony, 3 дня назад",
    },
    {
      color: "#FF51EE",
      category: "Продажи",
      vacancyCardText: "Специалист по продажам",
      location: "Коясан, Япония",
      company: Facebook,
      companyName: "Facebook, 7 дней назад",
    },
    {
      color: "#58D94D",
      category: "Служба поддержки",
      vacancyCardText: "Оператор колл центра",
      location: "Томаму, Япония",
      company: Cola,
      companyName: "CocaCola, 1 день назад",
    },
    {
      color: "#FF9051",
      category: "Мультимедиа",
      vacancyCardText: "Системный администратор",
      location: "Токио, Япония",
      company: Sony,
      companyName: "Sony, 3 дня назад",
    },
    {
      color: "#F84242",
      category: "Дизайн",
      vacancyCardText:
        "Дизайнер интерьера в профессиональную студию в цнетре города",
      location: "Йокогама, Япония",
      company: Facebook,
      companyName: "Facebook, 7 дней назад",
    },
    {
      color: "#383838",
      category: "Грузоперевозки",
      vacancyCardText: "Водитель на дальние дистанции",
      location: "Кобе, Япония",
      company: Cola,
      companyName: "CocaCola, 1 день назад",
    },
  ];

  return (
    <div>
      <h2>Новые вакансии</h2>
      <p>Найди работу своей мечты прямо сейчас</p>
      <div className={styles.cardsContainer}>
        {vacancyCardsData.map((vacancy, index) => (
          <VacancyCard key={index} item={vacancy} />
        ))}
      </div>
    </div>
  );
}

export default VacancyCardList;
