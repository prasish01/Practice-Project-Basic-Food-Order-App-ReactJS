import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/UI/Cart";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressProvider } from "./store/UserProgressContext";

function App() {
  return (
    <CartContextProvider>
      <UserProgressProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </UserProgressProvider>
    </CartContextProvider>
  );
}

export default App;
