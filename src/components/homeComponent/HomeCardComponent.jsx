import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/allProductSclice";
import "./homeComponent.css";
import { SlBasket } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
const HomeCardComponent = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <div>
      <Card style={{ width: "18rem",marginTop:"85px" }}>
        <Card.Body style={{ width: "286px", height: "500px" }}>
          <Card.Img  onClick={() => navigate(`/product/${item.id}`)}
            style={{ height: "336px", cursor: "pointer" }}
            src={item.image}
          ></Card.Img>
          <Card.Title style={{ height: "70px", marginTop: "10px" }}>
            {item.title.substring(1, 30)}
          </Card.Title>
          <Card.Text>{item.body}</Card.Text>
          <div className="d-flex justify-content-between">
          <Button variant="primary" >{item.price} ₼</Button>
          <Button variant="success" className="d-flex align-items-center gap-2 " onClick={() => dispatch(addToBasket(item))}>
            Add basket  <SlBasket/>
          </Button>

          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeCardComponent;

HomeCardComponent.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    price:PropTypes.number,
    id:PropTypes.number.isRequired
  }).isRequired,
};
