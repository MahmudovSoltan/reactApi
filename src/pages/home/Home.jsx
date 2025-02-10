import { useGetAllProductsQuery } from "../../redux/services/product";
import Loading from "../../components/loading/Loading";
import HomeCardComponent from "../../components/homeComponent/HomeCardComponent";
import './home.css'
const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  if (isLoading) {
    return (
      <div>
        <Loading  />
      </div>
    );
  }
  return (
    <div>
      <div className="home_container">
        {data?.map((item) => (
          <HomeCardComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
