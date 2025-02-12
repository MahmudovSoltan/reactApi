import { useGetAllProductsQuery } from "../../redux/services/product";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
import HomeCardComponent from "../../components/homeComponent/HomeCardComponent";
import "./home.css";
import ReactPaginate from "react-paginate";
import FilterComponent from "../../components/homeComponent/FilterComponent";

const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  const [filterProduct, setFilterProduct] = useState("");
  let filterProduc =   filterProduct? data?.filter((product) => product.category == filterProduct):data
  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 8;
 
  
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filterProduc?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterProduc?.length / itemsPerPage);
  function onFilterChange(filterCategory) {
    setFilterProduct(filterCategory);
  }



  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) %   filterProduc?.length;

    setItemOffset(newOffset);
  };
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <FilterComponent onFilterChange={onFilterChange} />
      <div className="home_container">
        {currentItems?.map((item) => (
          <HomeCardComponent key={item.id} item={item} />
        ))}
      </div>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Home;
