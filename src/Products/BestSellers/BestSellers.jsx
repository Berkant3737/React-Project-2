import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { RiArrowLeftRightFill } from "react-icons/ri";
import "./style.css";

function BestSellers(props) {
  return (
    <div>
      <div className="products pt-5">
        <div className="col-12 d-flex justify-content-between align-items-center products-title mb-3">
          <h4>Çok Satanlar</h4>{" "}
          <a href="#">
            TÜM ÇOK SATANLAR <FaArrowRight className="mb-1 ms-1 fs-6" />{" "}
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

              {/* PRODUCT CARD-BODY */}
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
                <div className="product-title mb-2">
                  <h6>{product.name}</h6>
                </div>
                {/* PRODUCT BARCODE */}

                <div className="product-money mb-2">
                  <h2 className="mb-4">{product.price}</h2>
                  {product.totalproduct?.length > 0 ? (
                    <div className="totalproduct text-center mb-2">
                      {product.totalproduct}{" "}
                    </div>
                  ) : (
                    ""
                  )}

                  <span className="cargo">BUGÜN KARGODA</span>

                  {/* PRODUCT TOOLTİP */}
                  <div className="text-start" id="tooltip">
                    <div className="tooltip-icons d-inline-block text-center">
                      <RiArrowLeftRightFill />
                    </div>
                    <h6 className="ps-4 d-inline-block text-white">
                      <a href="#">SEPETE EKLE</a>{" "}
                    </h6>
                  </div>
                  {/* PRODUCT TOOLTİP */}
                </div>
                {/* PRODUCT CARD-BODY */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestSellers;
