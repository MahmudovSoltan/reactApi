import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/services/product";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import "./detail.css";
import { addToBasket } from "../../redux/slices/allProductSclice";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isLoading } = useGetAllProductsQuery();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (data) {
      setDetail(data.find((item) => item.id == id));
    }
  }, [data, id]);

  if (isLoading) return <Loading />;

  if (!detail) {
    return <div>Məhsul tapılmadı!</div>;
  }
  console.log(detail);
  const handleAddToBasket = () => {
    dispatch(addToBasket(detail))
    toast.success("Product successfully added to the basket!");
  };
  return (
    <div>
      <div className="detail-container">
        <div className="product-image-section">
          <img
            src={detail.image}
            alt="Product Image"
            className="product-image"
          />
        </div>

        <div className="product-info-section">
          <h2 className="product-title">{detail.title}</h2>
          <p className="product-category">{detail.category}</p>
          <p className="product-description">{detail.description}</p>
          <p className="product-price">{detail.price} ₼</p>


          <button
            className="add-to-basket-btn"
            onClick={handleAddToBasket }
          >
            Add to Basket  <SlBasket/>
          </button>
          <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
