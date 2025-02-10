import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "../../redux/slices/allProductSclice";

const BasketTotalAmount = () => {
  const {totalAmount} = useSelector(state=>state.products)
  const dispatch = useDispatch()
  return (
    <div className="basket-total-container">
    <div className="total-amount">
      Total Amount:{totalAmount}  ₼
    </div>
    <button onClick={()=>dispatch(clearBasket())} className="clear-basket-button" >
      Clear Basket
    </button>
  </div>
  );
};

export default BasketTotalAmount;
