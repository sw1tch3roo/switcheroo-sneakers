import React from "react";

const SneakersCard = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heartUnliked.svg" alt="Unliked" />
      </div>
      <img width={150} height={150} src="/img/sneakers/asics.jpeg" alt="" />
      <h5>Men's shoes Asics Gel Kayano</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price: </span>
          <b>12 999 rub.</b>
        </div>
        <button className="button">
          <img width={20} height={20} src="/img/plus.png" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default SneakersCard;
