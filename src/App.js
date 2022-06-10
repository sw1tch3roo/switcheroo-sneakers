import BasketDrawer from "./components/basketDrawer/basketDrawer";
import Header from "./components/header/Header";
import SneakersCard from "./components/sneakersCard/SneakersCard";

function App() {
  return (
    <div className="wrapper clear">
      <BasketDrawer />
      <Header />
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
          <SneakersCard />
        </div>
      </div>
    </div>
  );
}

export default App;
