import React from "react";
import Noty from "noty";
import Bounce from "bounce.js";

import "../../../node_modules/noty/lib/noty.css";
import "../../../node_modules/noty/lib/themes/mint.css";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });

    new Noty({
      text: `
      <div style="display: flex; ">
      <img src=${image} width="50px" style="margin-right: 15px"></img>
      <p>${title}</p>
      </div>
      `,
      timeout: 1000,
      layout: "topRight",

      animation: {
        open: function (promise) {
          var n = this;
          new Bounce()
            .translate({
              from: { x: 450, y: 0 },
              to: { x: 0, y: 0 },
              easing: "bounce",
              duration: 1000,
              bounces: 4,
              stiffness: 3,
            })
            .scale({
              from: { x: 1.2, y: 1 },
              to: { x: 1, y: 1 },
              easing: "bounce",
              duration: 1000,
              delay: 100,
              bounces: 4,
              stiffness: 1,
            })
            .scale({
              from: { x: 1, y: 1.2 },
              to: { x: 1, y: 1 },
              easing: "bounce",
              duration: 1000,
              delay: 100,
              bounces: 6,
              stiffness: 1,
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve();
                });
              },
            });
        },
        close: function (promise) {
          var n = this;
          new Bounce()
            .translate({
              from: { x: 0, y: 0 },
              to: { x: 450, y: 0 },
              easing: "bounce",
              duration: 500,
              bounces: 4,
              stiffness: 1,
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve();
                });
              },
            });
        },
      },
    }).show();
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
