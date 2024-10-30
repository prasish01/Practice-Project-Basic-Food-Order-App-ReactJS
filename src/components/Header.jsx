import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItem = cartCtx.items.reduce(
    (totalNumofItem, item) => totalNumofItem + item.quantity,
    0
  );

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant logo" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart({totalCartItem})
        </Button>
      </nav>
    </header>
  );
}
