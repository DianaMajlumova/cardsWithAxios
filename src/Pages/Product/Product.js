import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";
import "./Product.scss"
function Product() {
  let { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setPost(response.data);
    });
  }, []);
  return (
    <>
      <Navbar /> <br />
      <div className="main_product_div">
        <div className="product_div">
          <div className="product_card">
            <div className="product_img">
              <img src={post.image}></img>
            </div>
            <h4>{post.price}$</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
