import React from "react";
import styles from "./SneakersCard.module.scss";

const SneakersCard = (props) => {
  const onPlusClick = () => alert("Вы добавили товар в корзину");

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heartUnliked.svg" alt="Unliked" />
      </div>
      <img width={150} height={150} src={props.sneakersImage} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price: </span>
          <b>{props.price} rub.</b>
        </div>
        <button className="button" onClick={onPlusClick}>
          <img width={20} height={20} src="/img/plus.png" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default SneakersCard;
