import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/services/product";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import "./detail.css";
import { Button, Card } from "react-bootstrap";
import { addToBasket } from "../../redux/slices/allProductSclice";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState();
  const { id } = useParams();
  const { data, isLoading } = useGetAllProductsQuery();

  useEffect(() => {
    setDetail(data?.filter((item) => item.id == id));
  }, []);
  console.log(detail);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>    
    );
  }
  return (
    <div>
      {
        detail?.map((data,i)=>(
      <Card key={i} style={{ width: "18rem", marginTop: "85px" }}>
        <Card.Body style={{ width: "286px", height: "500px" }}>
          <Card.Img
            style={{ height: "336px", cursor: "pointer" }}
            src={data.image}
          ></Card.Img>
          <Card.Title style={{ height: "70px", marginTop: "10px" }}>
            {data.title.substring(1, 30)}
          </Card.Title>
          <Card.Text>{data.body}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">{data.price} ₼</Button>
            <Button
              variant="success"
              className="d-flex align-items-center gap-2 "
              onClick={() => dispatch(addToBasket(data))}
            >
              Add basket <SlBasket />
            </Button>
          </div>
        </Card.Body>
      </Card>

        ))
      }
    </div>
  );
};

export default Detail;
