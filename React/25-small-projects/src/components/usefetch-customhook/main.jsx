import React from "react";
import useFetch from ".";

function Mainhook() {
  const { loading, error, data } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  return (
    <div>
      <h3>Custom Hook Fetch</h3>
      {loading ? <div>Loading please wait.</div> : null}
      {error ? <div>Error Occured</div> : null}
      {data && data.products && data.products.length
        ? data.products?.map((items) => <p key={items.key}>{items.title}</p>)
        : null}
      {/* {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null} */}
    </div>
  );
}

export default Mainhook;
