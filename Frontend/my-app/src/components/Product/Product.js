import { useEffect, useState } from "react";
import Style from "./Product.module.css"
import axios from "axios";
import { useUserStore } from "../../Store";
import { useNavigate } from 'react-router-dom';

function Product() {
    const { user, setUser } = useUserStore();
    const navigate = useNavigate();

    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/product/');
                setProducts(response.data.data);
                if (products) {
                    setLoading(false)
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchData();
    }, []);
    
    console.log(products)
    return (
        <section className={Style.section}>
            {loading ? (
                <span>Loading...</span>
            ) : (
                products.map(product => (
                    <article key={product.id} className={Style.article}>
                        <div>
                            <img src={product.imageUrls} alt="product" className={Style.img} />
                        </div>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <span>{product.price}</span>
                    </article>
                ))
            )}
        </section>

    );
}

export default Product;