import { useState } from "react";
import BasketDrawer from "./components/basketDrawer/BasketDrawer";
import Header from "./components/header/Header";
import SneakersCard from "./components/sneakersCard/SneakersCard";

function App() {
  const [items, setItems] = useState([]);
  const [basketOpened, setBasketOpened] = useState(false); // открыта ли корзина

  return (
    <div className="wrapper clear">
      {basketOpened && <BasketDrawer onClose={() => setBasketOpened(false)} />}
      {/* если первое значение false, выполнится второе */}
      {/* {basketOpened ? (
        <BasketDrawer onClose={() => setBasketOpened(false)} />
      ) : null} */}
      <Header onClickBasket={() => setBasketOpened(true)} />
      <div className="content p-40">
        {/* тут надпись 'все кроссовки' и поиск */}
        <div className="d-flex align-center justify-between">
          <h1>All shoes</h1>
          <div className="search-block d-flex">
            <img width={15} height={15} src="/img/search.png" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="sneakers">
          {items.map((value, key) => {
            return (
              <SneakersCard
                title={value.title}
                price={value.price}
                sneakersImage={value.sneakersImage}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
