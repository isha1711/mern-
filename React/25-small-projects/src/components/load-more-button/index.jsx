import React, { useEffect, useState } from "react";
import "./style.css";

function Loadbtn() {
  const [loading, setloading] = useState(false);
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0);
  const [disableButton, setdisableButton] = useState(false);

  async function fetchproduct() {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setproducts((dat)=>[...dat,...data.products]);
        setloading(false);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  }
  useEffect(() => {
    fetchproduct();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setdisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading Please Wait.</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((items) => (
              <div>
               
                <img  key = {items.id} src={items.thumbnail} alt={items.thumbnail} />
                <h3>{items.title}</h3>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setcount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}

export default Loadbtn;
