import React, { useEffect, useState } from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import axios from "axios";
import "./Home.scss"
import { Link } from "react-router-dom";
function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products ").then((response) => {
      setPost(response.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <section>
        <div className="sectionCards">
          <div className="card">
            {post.map((element) => {
              return (
                <div key={element.id} className="cardBox">
                  <p>{element.discontinued}</p>
                  <h2>{element.name}</h2>
                  <h3>{element.quantityPerUnit}</h3>
                  <Link to={`product/${element.id}`}><button>Learn more</button></Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
