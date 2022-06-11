import BasketDrawer from "./components/basketDrawer/basketDrawer";
import Header from "./components/header/Header";
import SneakersCard from "./components/sneakersCard/SneakersCard";

const sneakersArray = [
  {
    title: "Men's shoes Asics Gel Kayano",
    price: 12999,
    sneakersImage: "/img/sneakers/asics.jpeg",
  },
  {
    title: "Men's shoes Air Jordan 1 Mid",
    price: 32999,
    sneakersImage: "/img/sneakers/jordan.jpg",
  },
  {
    title: "Men's shoes Nike Blazer Mid'077",
    price: 7999,
    sneakersImage: "/img/sneakers/blazer.jpg",
  },
  {
    title: "Men's shoes Nike Dunk Low Scrap Sea Glass",
    price: 13999,
    sneakersImage: "/img/sneakers/dunk.jpeg",
  },
];

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
          {sneakersArray.map((value, key) => {
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
