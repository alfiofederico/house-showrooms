import {Link} from 'react-router-dom'
import rentCategoryImage from "../assets/categories/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/categories/sellCategoryImage.jpg";



function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        {/*  sliders */}

        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Properties for rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sale"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Properties for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore
