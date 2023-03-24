import logo from "./logo.svg";
import "./App.css";

function App() {
  const friends = ["Hasan", "Kamal", "Jamal", "Kabir", "Ariful"];
  const products = [
    {
      name: "Iphone",
      price: "80000",
    },
    {
      name: "Laptop",
      price: "50000",
    },
    {
      name: "Watch",
      price: "2000",
    },
  ];

  const bestPlayer = {
    name: "Shahid Afridi",
    nationality: "Pakistan",
    age: 40,
  };

  return (
    <div className="App">
      {friends.map((friend) => (
        <Friend name={friend}></Friend>
      ))}

      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}

      <BestPlayer
        name={bestPlayer.name}
        nationality={bestPlayer.nationality}
        age={bestPlayer.age}
      ></BestPlayer>
    </div>
  );
}

// console.log();

function Friend(props) {
  return (
    <div className="single-item">
      <h3>Name: {props.name}</h3>
      <p>{props.playerName}</p>
    </div>
  );
}

function Product(props) {
  return (
    <div className="single-product">
      <h3>Produst Name: {props.name} </h3>
      <p>Price: {props.price} </p>
    </div>
  );
}

function BestPlayer(props) {
  return (
    <div>
      <h3>Best player Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Nationality: {props.nationality}</p>
    </div>
  );
}

export default App;
