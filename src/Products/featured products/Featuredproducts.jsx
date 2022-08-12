import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { RiArrowLeftRightFill } from "react-icons/ri";
import "./style.css";

function Featuredproducts(props) {
 
  return (
    <div>
      <div className="products pt-5 justify-content-center">
        <div className="col-12 d-flex justify-content-between align-items-center products-title mb-3">
          <h4>Öne Çıkan Ürünler</h4>{" "}
          <a href="#">
            TÜM ÖNE ÇIKANLAR <FaArrowRight className="mb-1 ms-1 fs-6" />{" "}
          </a>
        </div>
        {props.products.map(function (product, i) {
          return (
            <div className="card text-center mb-0 d-inline-block" id="card">
              {/* PRODUCT DESCRİPTİON */}
              <div className="ShortDescription">
                <span>{product.ShortDescription} </span>
              </div>
              {/* PRODUCT DESCRİPTİON */}

              {/* PRODUCT SOLD */}
              {product.sold?.length > 0 ? (
                <div className="tooltip-sold text-center">{product.sold} </div>
              ) : (
                ""
              )}
              {/* PRODUCT SOLD */}

              {/* PRODUCT İMG */}
              <div className="card-img text-center pt-5">
                <img
                  src={product.imgurl}
                  className="card-img-top pt-2"
                  alt="..."
                />
              </div>
              {/* PRODUCT İMG */}

              {/* CARD BODY */}
              <div className="card-body">
                {/* PRODUCT İNFO */}
                <div className="product-info mb-2">
                  <span className="text-warning">
                    <FaStar /> {product.rating}
                  </span>{" "}
                  <span className="text-muted">(122 yorum)</span>
                </div>
                {/* PRODUCT İNFO */}

                {/* PRODUCT BARCODE */}
                <div className="product-no mb-2">
                  <span className="text-muted">{product.barcode} </span>
                </div>
                {/* PRODUCT BARCODE */}

                {/* PRODUCT TİTLE */}
                <div className="product-title mb-2">
                  <h6>{product.name}</h6>
                </div>
                {/* PRODUCT TİTLE */}

                {/* PRODUCT MONEY */}
                <div className="product-money mb-1">
                  <h2 className="mb-4">{product.price}</h2>
                  {product.totalproduct?.length > 0 ? (
                    <div className="totalproduct text-center mb-2">
                      {product.totalproduct}{" "}
                    </div>
                  ) : (
                    ""
                  )}
                  {/* PRODUCT MONEY */}

                  <span className="cargo">BUGÜN KARGODA</span>

                  {/* PRODUCT TOOLTİP */}
                  <div className="text-start" id="tooltip">
                    <div className="tooltip-icons d-inline-block text-center">
                      <RiArrowLeftRightFill />
                    </div>
                    <button className="ps-4 d-inline-block text-white">
                      <a href="#">SEPETE EKLE</a>{" "}
                    </button>
                  </div>
                  {/* PRODUCT TOOLTİP */}
                </div>
                {/* CARD BODY */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featuredproducts;
