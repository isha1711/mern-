import featurecall from "../data";
import { createContext, useEffect, useState } from "react";

export const featureflag = createContext(null);


function Feature({ children }) {
  const [loading, setloading] = useState(false);
  const [enableflag, setenableflag] = useState({});

  async function fetchfeature() {
    try {
      const res = await featurecall();
      console.log(res);
      setenableflag(res);
      setloading(false);
    } catch (e) {
      setloading(false);
      console.log(e);
     
    }
  }
  useEffect(() => {
    fetchfeature();
  }, []);
  return (
    <featureflag.Provider value={{ loading, enableflag }}>
      {children}
    </featureflag.Provider>
  );
}

export default Feature;
