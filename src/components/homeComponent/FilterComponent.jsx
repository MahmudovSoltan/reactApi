import { useGetAllCAtegoriesQuery } from "../../redux/services/categories";
import { useState } from "react";
import "./homeComponent.css"; // CSS faylı
import PropTypes from "prop-types";

const FilterComponent = ({ onFilterChange }) => {
  const { data } = useGetAllCAtegoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="filter-container">
      <ul className="category-list">
        <li
          className={`category-item ${
            selectedCategory === null ? "active" : ""
          }`}
          onClick={() => handleCategoryClick(null)}
        >

          All
        </li>
        {data?.map((category) => (
          <li
            key={category}
            className={`category-item ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;

FilterComponent.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
