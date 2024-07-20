import React, { useEffect, useState } from "react";
import "./main";

function useFetch({ url , option={}}) {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [data, setdata] = useState(null);

  async function fetchhook() {
    setloading(true);
    try {

      const res = await fetch(url ,{...option});
      if (!res.ok) throw new Error(res.statusText);
      const result = await res.json();
      console.log(result);
      setdata(result);
      setloading(false);
      seterror(null);

    } catch(e) {
      //console.log(e);
     seterror(e.message);
    }
  }
  useEffect(() => {
    fetchhook();
  }, [url]);
  return { data, error, loading };
}

export default useFetch;
