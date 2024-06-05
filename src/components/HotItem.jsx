import "../index.css";
import {Link } from 'react-router-dom';

function HotItem() {
  return (
    <>
      {/* <!-- Hot Items Start --> */}
      <section className="mt-20 pb-10">
        <div className="container">
          <div className="w-full text-center mb-10">
            <h1 className="font-medium text-3xl text-white uppercase leading-[48px]">Hot Items</h1>
          </div>
          <div className="flex flex-wrap justify-between mb-0 md:mb-10 md:gap-1 lg:gap-6 md:mx-4 lg:mx-48">
            <div className="card-items">
              <img src="img/2.png" alt="" className="card-img" />
              <h2 className="card-title">Freemax - M Pro 2</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.59.00</p>
            </div>
            <div className="card-items">
              <img src="img/3.png" alt="" className="card-img" />
              <h2 className="card-title">RELX Infinity 2 Blue Bay</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.280.000</p>
            </div>
            <div className="card-items">
              <img src="img/4.png" alt="" className="card-img" />
              <h2 className="card-title">Splash Some Colors (blue)</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.59.00</p>
            </div>
            <div className="card-items">
              <img src="img/5.png" alt="" className="card-img" />
              <h2 className="card-title">Pod X Signature green satin</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.159.000</p>
            </div>
            <div className="card-items">
              <img src="img/6.png" alt="" className="card-img" />
              <h2 className="card-title">Oxbar RRD purple</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.79.000</p>
            </div>
            <div className="card-items">
              <img src="img/7.png" alt="" className="card-img" />
              <h2 className="card-title">WAKA Hello Banana Freeze</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.80.000</p>
            </div>
            <div className="card-items">
              <img src="img/8.png" alt="" className="card-img" />
              <h2 className="card-title">Vinci Bar Lime</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.60.000</p>
            </div>
            <div className="card-items">
              <img src="img/9.png" alt="" className="card-img" />
              <h2 className="card-title">Hellvape Shoelace-</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.59.00</p>
            </div>
            <div className="card-items">
              <img src="img/10.png" alt="" className="card-img" />
              <h2 className="card-title">Old Nuts Moon Shine</h2>
              <img src="img/bintang.png" alt="" className="card-bintang" />
              <p className="card-p">Rp.314.000</p>
            </div>
          </div>
          <div className="w-full text-center mb-10">
            <button className="font-medium text-sm py-2 px-7 bg-white text-tema rounded-full lg:text-xl"><Link to="/product1">See More</Link></button>
          </div>
        </div>
      </section>
      {/* <!-- End Hot Items --> */}
    </>
  );
}

export default HotItem;
