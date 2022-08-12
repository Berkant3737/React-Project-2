import React from "react";
import Bank from "./img/Bank.png";
import "./style.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row text-start">
            <div className="col-12 col-md-2 text-center">
              <ul>
                <h6>KURUMSAL</h6>
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Müşteri Hizmetleri</a>
                </li>
                <li>
                  <a href="#">Sipariş Aşamaları</a>
                </li>
                <li>
                  <a href="#">Sıkça Sorulan Sorular</a>
                </li>
                <li>
                  <a href="#">İnsan Kaynakları</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikamız</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-2 text-center">
              <ul>
                <br />
                <li>
                  <a href="#">İletişim</a>
                </li>
                <li>
                  <a href="#">Vatan Card</a>
                </li>
                <li>
                  <a href="#">Servis Takip Formu</a>
                </li>
                <li>
                  <a href="#">Mağazalar</a>
                </li>
                <li>
                  <a href="#">İşlem Rehberi</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-2 text-center">
              <ul>
                <h6>KATEGORİLER</h6>
                <li>
                  <a href="#">Bilgisayar</a>
                </li>
                <li>
                  <a href="#">Cep Telefonu</a>{" "}
                </li>
                <li>
                  <a href="#">TABLET PC</a>
                </li>
                <li>
                  <a href="#">Akıllı Saat</a>
                </li>
                <li>
                  <a href="#">Vestel TV</a>
                </li>
                <li>
                  <a href="#">Oyun Bilgisayarı</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-2 text-center">
              <ul>
                <br />
                <li>
                  <a href="#">Küçük Ev Aletleri</a>
                </li>
                <li>
                  <a href="#">Kişisel Bakım Ürünleri</a>
                </li>
                <li>
                  <a href="#">Elektrikli Süpürge</a>
                </li>
                <li>
                  <a href="#">Ütü</a>
                </li>
                <li>
                  <a href="#">Masaüstü Bilgisayar</a>
                </li>
                <li>
                  <a href="#">Sabit Diskler</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3 text-center">
              <ul>
                <h6>ÖZEL ÜRÜNLER </h6>
                <li>
                  <a href="#">İphone 7</a>
                </li>
                <li>
                  <a href="#">İphone 6S</a>
                </li>
                <li>
                  <a href="#">İphone 5S</a>
                </li>
                <li>
                  <a href="#">İphone SE</a>
                </li>
                <li>
                  <a href="#">General Mobile 5 Plus</a>
                </li>
                <li>
                  <a href="#">Galaxy S7</a>
                </li>
                <li>
                  <a href="#">Note 5</a>
                </li>
                <li>
                  <a href="#">Galaxy S6</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <div className="row footer-description d-flex justify-content-center">
        <div className="col-12">
          <div className="col-6 d-inline-block">
            <span>
              <strong>Türkiye'nin Teknoloji Hiperstoru</strong>
            </span>{" "}
            <br />
            <span>Copyright 2016 Vatan Bilgisayar San. ve Tic. A.Ş</span>
          </div>
          <div className="col-6 d-inline-block text-end">
            <img src={Bank} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
