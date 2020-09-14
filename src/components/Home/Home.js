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
          <Product
            id="12312312"
            title="Fire TV Stick streaming media player with Alexa built in, includes Alexa Voice Remote, HD, easy set-up"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_UL320_SR320,320_.jpg"
            rating={5}
          />
          <Product
            id="12312313"
            title="GTRACING Gaming Chair Racing Office Computer Game Chair Ergonomic Backrest and Seat Height Adjustment "
            price={159.99}
            image="https://m.media-amazon.com/images/I/4172ekEXikL._AC_SL260_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="$10 PlayStation Store Gift Card [Digital Code]"
            price={10.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71cCI9QPwYL._AC_UL480_SR333,480_.jpg"
            rating={4}
          />
          <Product
            title="The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich"
            price={14.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81qW97ndkvL._AC_UL270_SR178,270_.jpg"
            rating={5}
          />
          <Product
            title="Kindle Paperwhite – Now Waterproof with more than 2x the Storage "
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61eAq6gg-XL._AC_UL200_SR200,200_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL200_SR200,200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
