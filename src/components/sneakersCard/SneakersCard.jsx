import React from "react";
import { useState } from "react";
import styles from "./SneakersCard.module.scss";

const SneakersCard = ({ title, price, sneakersImage }) => {
  // props

  const [toBasket, setToBasket] = useState(false);
  const [likedSneakers, setLikedSneakers] = useState(false);

  const onPlusClick = () => setToBasket(!toBasket); // инвертируем значение
  const onFavoriteClick = () => setLikedSneakers(!likedSneakers);

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={likedSneakers ? "/img/heartLiked.svg" : "/img/heartUnliked.svg"}
          alt="Liked"
          onClick={onFavoriteClick}
        />
      </div>
      <img width={150} height={150} src={sneakersImage} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price: </span>
          <b>{price} rub.</b>
        </div>
        <button className={styles.button} onClick={onPlusClick}>
          <img
            width={20}
            height={20}
            src={toBasket ? "/img/buttonChecked.svg" : "/img/plus.png"}
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
};

export default SneakersCard;
