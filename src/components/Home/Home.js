import React from "react";

import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_1500x600_PRE_Final_en-US_PVD5224._CB410800060_.jpg"
          alt="banner"
          className="home__image"
        />
        <div className="home__row">
          <Product />
          {/* Product */}
        </div>
        <div className="home__row">
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
