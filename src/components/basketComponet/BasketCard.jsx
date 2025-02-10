import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { decrimentCount, deleteProduct, increMentCount } from "../../redux/slices/allProductSclice";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const BasketCard = ({item}) => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    function deleteHandle(item){
     console.log(item);
     dispatch(deleteProduct(item))
     
    }
    
  return (
    <div className="basket_left">
      <Card  style={{ width: "18rem", marginTop: "85px" }}>
        <Card.Body style={{ width: "286px" }}>
          <Card.Img
            style={{ height: "336px", cursor: "pointer" }}
            src={item.image}
            onClick={() => navigate(`/product/${item.id}`)}
          ></Card.Img>
          <Card.Title style={{ height: "70px", marginTop: "10px" }}>
            {item.title.substring(1, 30)}
          </Card.Title>
          <Card.Text>{item.body}</Card.Text>
          <div className="card_bottom">
            <div
              className="increment_button"
              onClick={() => dispatch(decrimentCount(item.id))}
            >
              +
            </div>
            <div>{item.count}</div>
            <div
              className="decrement_button"
              onClick={() => dispatch(increMentCount(item.id))}
            >
              -
            </div>
            <p className="price">Qiymet {item.price * item.count}</p>
          </div>
          <div className="d-grid mt-1">
            <button className="btn btn-danger w-full" onClick={()=>deleteHandle(item)}>Delete</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};


export default BasketCard;
BasketCard.propTypes = {
    item: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };
