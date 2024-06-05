import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/detailproduct1.css";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8888/products/${id}`);
        console.log('API Response:', res.data); // Debug: Log the API response
        setProduct(res.data);
      } catch (err) {
        console.log('API Error:', err); // Debug: Log any errors from the API call
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    console.log('Product is null'); // Debug: Log when product is null
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main className="detail-body">
        <section className="product-hero">
          <div className="detail">
            <div className="product-details">
              <div className="product-image">
                <img
                  src={`http://localhost:8888${product.image}`}
                  alt={product.name}
                  className="oxbar-image"
                />
              </div>
              <div className="product-info">
                <h2>{product.name}</h2>
                <p className="price">Rp. {product.price}</p>
                <div className="flex gap-1 ">
                  <CiSquareMinus size={24} />
                  <p className="text-[24px] ">1</p>
                  <CiSquarePlus size={24} />
                </div>
                <button className="cart">Add to Cart</button>
                <div className="description">
                  <h3>DESCRIPTION</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product-reviews">
          <div className="detail">
            <h2>Product Reviews</h2>
            <div className="reviews">
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="../public/img/star.png" alt="star" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec laoreet justo, et eleifend leo.</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="../../public/img/star.png" alt="star" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec laoreet justo, et eleifend leo.</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="../../public/img/star.png" alt="star" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec laoreet justo, et eleifend leo.</p>
              </div>
              <div className="review">
                <div className="rating">5/5</div>
                <img className="star" src="../../public/img/star.png" alt="star" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec laoreet justo, et eleifend leo.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="related-products">
          <div className="detail">
            <h2>More Like This</h2>
            <div className="products">
              <div className="product">
                <button className="product-link" onClick={() => window.location.href='#'}>
                  <img
                    src="../../public/img/foom2.png"
                    alt="Oxbar Mini apple pear"
                    className="product-image"
                  />
                </button>
                <h3>Oxbar Mini apple pear</h3>
                <img className="ratings" src="../../public/img/bintang.png" alt="star1" />
                <div className="price">Rp. 59.000</div>
              </div>
              <div className="product">
                <button className="product-link" onClick={() => window.location.href='#'}>
                  <img
                    src="../../public/img/cart10.png"
                    alt="WOVICA soMatch Mini Device"
                    className="product-image"
                  />
                </button>
                <h3>WOVICA soMatch Mini Device</h3>
                <img className="ratings" src="../../public/img/bintang.png" alt="star1" />
                <div className="price">Rp. 50.000</div>
              </div>
              <div className="product">
                <button className="product-link" onClick={() => window.location.href='#'}>
                  <img
                    src="../../public/img/image_21.png"
                    alt="Dinner Lady Banana Ice"
                    className="product-image"
                  />
                </button>
                <h3>Dinner Lady Banana Ice</h3>
                <img className="ratings" src="/img/bintang.png" alt="star1" />
                <div className="price">Rp. 139.000</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
