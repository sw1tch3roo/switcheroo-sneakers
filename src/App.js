// flaticom.com !

function App() {
  return (
    <div className="wrapper">
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
        <h1>All stories</h1>
        <div className="sneakers">
          <div className="card">
            <img
              width={170}
              height={170}
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
              width={170}
              height={170}
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
              width={170}
              height={170}
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
              width={170}
              height={170}
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
        </div>
      </div>
    </div>
  );
}

export default App;
