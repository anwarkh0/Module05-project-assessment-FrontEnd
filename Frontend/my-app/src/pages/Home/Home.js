import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import Style from "./Home.module.css"
function Home() {
  const [product, setProduct] = useState({})
  useEffect(() => {

  }, [])
  return (
    <section className={Style.section}>
    <Product/>
    </section>
  );
}

export default Home;


