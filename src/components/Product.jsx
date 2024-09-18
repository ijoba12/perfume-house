import React from "react";
import product from "../product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ratingImg from "../assets/Star 5.png"

const Product = () => {
  console.log(product);

  return (
    <>
      <main className="d-flex flex-wrap justify-content-between gap-4 pt-2">
        {product.map((product) => {
            const {image,id,title,price,discountPrice,rating,rateCount} = product;
          return (
            <>
              <Card key={id} className="card-container">
                <Card.Img variant="top" src={image} className="w-100 card-img" />
                <Card.Body>
                  <Card.Title className="card-title">{title}</Card.Title>
                  <div className="d-flex gap-1">
                    <div className="pt-1">
                        <img src={ratingImg} alt="rating-img" />
                        <img src={ratingImg} alt="rating-img" />
                        <img src={ratingImg} alt="rating-img" />
                        <img src={ratingImg} alt="rating-img" />
                        <img src={ratingImg} alt="rating-img" />
                    </div>
                    <div className="d-flex gap-2 pt-2 fw-bold">
                        <p>{rating}</p>
                        <p>({rateCount})</p>
                    </div>
                  </div>
                  <Card.Text className="d-flex gap-2 card-price fw-bold">
                    #{price}
                    <span className="text-decoration-line-through card-discount-prize">#{discountPrice}</span>
                  </Card.Text>
                  <button className="w-100 add-to-cart-btn">Add to Cart</button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </main>
    </>
  );
};

export default Product;
