// flaticom.com !

function App() {
  return (
    <div className="wrapper clear">
      <div className="mainShadow">
        <div className="drawer d-flex flex-column">
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

      <header>
        {/* делаю левую часть шапки */}
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3>Switcheroo's shoes</h3>
            <p>My favorite collection of shoes</p>
          </div>
        </div>
        {/* делаю правую часть шапки */}
        <ul className="headerRight">
          <li className="mr-30">
            <img className="mr-10" width={30} height={30} src="/img/card.png" />
            <span>1250$</span>
          </li>
          <li>
            <img width={40} height={40} src="/img/user.png" />
          </li>
        </ul>
      </header>
      <div className="content">
        {/* тут надпись 'все кроссовки' и поиск */}
        <div className="d-flex align-center justify-between">
          <h1>All shoes</h1>
          <div className="search-block d-flex">
            <img width={15} height={15} src="/img/search.png" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="sneakers">
          <div className="card">
            <div className="favorite">
              <img src="/img/heartUnliked.svg" alt="Unliked" />
            </div>
            <img
              width={150}
              height={150}
              src="/img/sneakers/asics.jpeg"
              alt=""
            />
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
          <div className="card">
            <img
              width={150}
              height={150}
              src="/img/sneakers/blazer.jpg"
              alt=""
            />
            <h5>Men's shoes Nike Blazer Mid'077</h5>
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
          <div className="card">
            <img
              width={150}
              height={150}
              src="/img/sneakers/jordan.jpg"
              alt=""
            />
            <h5>Men's shoes Air Jordan 1 Mid</h5>
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
          <div className="card">
            <img
              width={150}
              height={150}
              src="/img/sneakers/dunk.jpeg"
              alt=""
            />
            <h5>Men's shoes Nike Dunk Low Scrap Sea Glass</h5>
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
        </div>
      </div>
    </div>
  );
}

export default App;
