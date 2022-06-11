import React from "react";

const BasketDrawer = () => {
  return (
    <div style={{ display: "none" }} className="mainShadow">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Basket{" "}
          <img
            className="basketRemove cu-p" // cursor-pointer (macro-css)
            width={30}
            height={30}
            src="/img/cancel.svg"
            alt="Remove"
          />
        </h2>
        <div className="items">
          <div className="basketItem d-flex align-center mb-20">
            {/* <img
              className="mr-20"
              width={125}
              height={125}
              src="img/sneakers/blazer.jpg"
              alt="Sneakers"
            /> */}
            <div
              style={{ backgroundImage: "url(/img/sneakers/blazer.jpg)" }}
              className="basketItemImg"
            ></div>
            <div className="flex">
              <p className="mb-5">Men's shoes Nike Blazer Mid'077</p>
              <b>12 999 rub.</b>
            </div>
            <img
              className="basketRemove"
              width={30}
              height={30}
              src="/img/cancel.svg"
              alt="Remove"
            />
          </div>
          <div className="basketItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/blazer.jpg)" }}
              className="basketItemImg"
            ></div>
            <div className="flex">
              <p className="mb-5">Men's shoes Nike Blazer Mid'077</p>
              <b>12 999 rub.</b>
            </div>
            <img
              className="basketRemove"
              width={30}
              height={30}
              src="/img/cancel.svg"
              alt="Remove"
            />
          </div>
        </div>
        <div className="basketTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>21 498 rub.</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>1074 rub.</b>
            </li>
          </ul>
          <button className="greenButton">
            Order <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketDrawer;
