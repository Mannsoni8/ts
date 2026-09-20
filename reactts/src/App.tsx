import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import { Counter } from "./components/Counter.tsx";
import type { Chai } from "./types.ts";
import { Chailist } from "./components/Chailist.tsx";
import { OrderForm } from "./components/OrderForm.tsx";
import { Card } from "./components/Card.tsx";

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 30 },
  { id: 2, name: "Ginger", price: 50 },
  { id: 3, name: "Lemon", price: 60 },
];

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name="HeadPhone" price={55} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <Chailist items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("placed", order.name, order.cups);
          }}
        />
      </div>
      <div>
        <Card title="Chai" footer={<button>Order Now</button>} />
      </div>
    </>
  );
}

export default App;
