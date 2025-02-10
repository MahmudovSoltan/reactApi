import { useSelector } from "react-redux";
import "./basket.css";
import BasketCard from "../../components/basketComponet/BasketCard";
import BasketTotalAmount from "../../components/basketComponet/BasketTotalAmount";

const Basket = () => {
  const { products } = useSelector((state) => state.products);


  
  console.log(products);
     if(products.length ==0){
      return (
        <div className="basket_empty">
          <p>Your basket is empty.</p>
        </div>
      );
     }
  return (
    <div className="basket_main">
      <div className="basket_container">
        {products.map((item, i) => (
          <BasketCard key={i} item={item} />
        ))}
      </div>
      <BasketTotalAmount />
    </div>
  );
};

export default Basket;
