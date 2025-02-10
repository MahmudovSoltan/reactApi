import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decrimentCount,
  increMentCount,
} from "../redux/slices/allProductSclice";
import "./basket.css";
const Basket = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  
  return (
    <div className="basket_container">
      {products.map((item, i) => (
        <Card key={i} style={{ width: "18rem",marginTop:"85px" }}>
          <Card.Body style={{ width: "286px", height: "500px" }}>
            <Card.Img
              style={{ height: "336px", cursor: "pointer" }}
              src={item.image}
            ></Card.Img>
            <Card.Title style={{ height: "70px", marginTop: "10px" }}>
              {item.title.substring(1, 30)}
            </Card.Title>
            <Card.Text>{item.body}</Card.Text>
            <div className="card_bottom">
              <div className="increment_button" onClick={() => dispatch(decrimentCount(item.id))}>+</div>
              <div>{item.count}</div>
              <div className="decrement_button" onClick={() => dispatch(increMentCount(item.id))}>-</div>
              <p className="price">Qiymet {item.price * item.count}</p>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Basket;