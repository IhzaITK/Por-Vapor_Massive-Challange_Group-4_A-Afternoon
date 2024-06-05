import Header from "../components/Header";
import Footer from "../components/Footer";
import HotItem from "../components/HotItem";
import ExploreSea from "../components/ExploreSea";

function App() {
  return (
    <div className="bg-coklat">
      {/* Header */}
      <Header />
      <section>
        <div className="w-full pt-10 pb-10 text-center">
          <h1 className="font-base text-3xl text-white bg-[url('/img/1.gif')] bg-cover py-52 bg-center tracking-[-0.901px] leading-[90.119px] lg:py-80 md:text-4xl">
            por-vapor<span className="text-xs relative -top-2 md:-top-4">™</span>
          </h1>
        </div>
      </section>
      {/* End Header */}

      {/* HotItems */}
      <HotItem />
      {/* End Hot Items */}

      {/* Foom Section */}
      <section className="mt-20 mb-16">
        <div className="w-full mb-12 gap-6 items-center self-center">
          <div className="flex justify-center gap-4 text-center items-center">
            <img src="img/foom.jpeg" alt="" className="rounded-full w-16 lg:w-24" />
            <h3 className="text-white font-normal leading-2 text-xl lg:leading-10 lg:text-2xl">
              FOOM LAB <span className="block">GLOBAL</span>
            </h3>
          </div>
        </div>

        <div className="w-full flex flex-wrap gap-2 justify-center md:mt-10">
          <div className="text-center mb-1">
            <img src="img/foom1.png" alt="" className="w-24 h-24 rounded-xl mx-auto md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] lg:text-sm">FOOM</h5>
              <p className="font-medium text-[6px] uppercase md:text-[7px] lg:text-xs">Foom P0d X Brilliant BLACK (Device)</p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/foom2.png" alt="" className="w-24 h-24 rounded-xl mx-auto md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] lg:text-sm">FOOM</h5>
              <p className="font-medium text-[6px] uppercase md:text-[7px] lg:text-xs">Foom P0d X Space Grey (Device)</p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/foom3.png" alt="" className="w-24 h-24 rounded-xl mx-auto md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] lg:text-sm">FOOM</h5>
              <p className="font-medium text-[6px] uppercase md:text-[7px] lg:text-xs">Foom P0d X Brilliant Gold (Device)</p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/foom4.png" alt="" className="w-24 h-24 rounded-xl mx-auto md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] lg:text-sm">FOOM</h5>
              <p className="font-medium text-[6px] uppercase md:text-[7px] lg:text-xs">Foom P0d X Hot Pink (Device)</p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/foom6.png" alt="" className="w-24 h-24 rounded-xl mx-auto md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] lg:text-sm">FOOM</h5>
              <p className="font-medium text-[6px] uppercase md:text-[7px] lg:text-xs">ICY BANANA[Icy Series]</p>
            </div>
          </div>
        </div>
        <div className="flex self-center justify-center max-w-[14rem] mx-auto py-2 px-2 mt-5 md:mt-10 border border-white rounded-xl">
          <button className="uppercase text-white font-normal text-[8px] lg:text-xs">See More About Foom Lab</button>
        </div>
      </section>
      {/* End Foom Section */}

      {/* Waka Section */}
      <section className="mt-24 mb-16">
        <div className="w-full mb-12 gap-6 items-center self-center">
          <div className="flex justify-center gap-4 text-center items-center">
            <img src="img/waka.png" alt="" className="rounded-full w-16 lg:w-24" />
            <h3 className="text-white font-normal leading-2 text-lg lg:leading-10 lg:text-2xl">
              WAKA<span className="block">DISPOSE</span>
            </h3>
          </div>
        </div>

        <div className="w-full flex flex-wrap gap-2 justify-center md:mt-10">
          <div className="text-center mb-1">
            <img src="img/waka1.png" alt="" className="w-24 h-24 rounded-xl mx-auto bg-white md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] md:text-sm">WAKA</h5>
              <p className="font-medium text-[6px] uppercase md:text-[8px] lg:text-xs">
                WAKA soPro PA600 DISPOSABLE<span className="block">600 puffs / red buzz</span>
              </p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/waka2.png" alt="" className="w-24 h-24 rounded-xl mx-auto md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] md:text-sm">WAKA</h5>
              <p className="font-medium text-[6px] uppercase md:text-[8px] lg:text-xs ">
                WAKA Hello DISPOSABLE<span className="block">600 puffs / 3% / WaterMellon Chill</span>
              </p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/waka3.png" alt="" className="w-24 h-24 rounded-xl mx-auto bg-white md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] md:text-sm">WAKA</h5>
              <p className="font-medium text-[6px] uppercase md:text-[8px] lg:text-xs ">
                WAKA Sopro Pa600 Disposable<span className="block">600 puffs / Minty Lemon</span>
              </p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/waka4.png" alt="" className="w-24 h-24 rounded-xl mx-auto md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] md:text-sm">WAKA</h5>
              <p className="font-medium text-[6px] uppercase md:text-[8px] lg:text-xs ">
                WAKA Hello DISPOSABLE<span className="block">600 puffs / 3% / Golden Tobacco</span>
              </p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/waka5.png" alt="" className="w-24 h-24 rounded-xl mx-auto bg-white md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] md:text-sm">WAKA</h5>
              <p className="font-medium text-[6px] uppercase md:text-[8px] lg:text-xs ">
                WAKA Sopro Pa600 Disposable<span className="block">600 puffs / Green Tea</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex self-center justify-center max-w-[14rem] mx-auto py-2 px-2 mt-10 border border-white rounded-xl">
          <button className="uppercase text-white font-normal text-[8px] lg:text-xs">See More About WAKA</button>
        </div>
      </section>
      {/* Waka Section End */}

      {/* Relx Section */}
      <section className="mt-24 mb-16">
        <div className="w-full mb-12 gap-6 items-center self-center">
          <div className="flex justify-center gap-4 text-center items-center">
            <img src="img/relix.png" alt="relx" className="rounded-full w-16 lg:w-24" />
            <h3 className="text-white font-normal leading-2 text-xl md:leading-10 lg:text-2xl">RELX</h3>
          </div>
        </div>

        <div className="w-full flex flex-wrap gap-2 justify-center md:mt-10">
          <div className="text-center mb-1">
            <img src="img/relix1.png" alt="" className="w-24 h-24 rounded-xl mx-auto bg-white md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] md:text-sm">RELX</h5>
              <p className="font-medium text-[6px] uppercase md:text-[8px] lg:text-xs ">Relx Essential Device (Black)</p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/relix2.png" alt="" className="w-24 h-24 rounded-xl mx-auto bg-white md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] md:text-sm">RELX</h5>
              <p className="font-medium text-[6px] uppercase md:text-[8px] lg:text-xs ">Relx E-liquid (3% / Kiwi Blast)</p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/relix3.png" alt="" className="w-24 h-24 rounded-xl mx-auto bg-white md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] md:text-sm">RELX</h5>
              <p className="font-medium text-[6px] uppercase md:text-[8px] lg:text-xs">Relx Artisan Metal Silver</p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/relix4.png" alt="" className="w-24 h-24 rounded-xl mx-auto bg-white md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] md:text-sm">RELX</h5>
              <p className="font-medium text-[6px] uppercase md:text-[8px] lg:text-xs">Relx E-liquid (3% / Iced Tea)</p>
            </div>
          </div>
          <div className="text-center">
            <img src="img/relix5.png" alt="" className="w-24 h-24 rounded-xl mx-auto bg-white md:w-36 md:h-40 lg:w-60 lg:h-72" />
            <div className="text-white mt-1">
              <h5 className="font-bold text-[8px] md:text-sm">RELX</h5>
              <p className="font-medium text-[6px] uppercase md:text-[8px] lg:text-xs ">Relx Essential Device (White)</p>
            </div>
          </div>
        </div>
        <div className="flex self-center justify-center max-w-[14rem] mx-auto py-2 px-2 mt-10 border border-white rounded-xl">
          <button className="uppercase text-white font-normal text-[8px] lg:text-xs">See More About RELX</button>
        </div>
      </section>
      {/* Relx Section End */}

      {/* Section Vape Img */}
      <section className="mt-24 md:mt-40 mb-16 ">
        <div className="md:container ">
          <div className="w-full flex gap-2 justify-center">
            <img src="img/11.png" alt="" className="w-40 h-auto md:w-[360px] lg:w-[490px] rounded-2xl shadow-2xl" />
            <img src="img/12.png" alt="" className="w-40 h-auto md:w-[360px] lg:w-[490px] shadow-2xl" />
          </div>
          <div className="w-full mt-5">
            <img src="img/13.png" alt="" className="mx-auto w-[325px] lg:max-w-[990px] md:w-[1364px] " />
          </div>
          <div className="w-full flex items-center px-4 gap-0 justify-between sm:justify-center sm:gap-16 md:justify-between md:gap-0 ">
            <figure className="text-center mt-14 ml-8 md:ml-24 md:mt-36 lg:ml-44">
              <img src="img/like.svg" alt="" className="w-[40px] md:w-[60px] mx-auto" />
              <h3 className="uppercase text-white font-normal text-[8px] mt-3 md:text-xs lg:text-sm md:mt-7 leading-5">
                Easy<span className="block">Shopping</span>
              </h3>
            </figure>
            <figure className="text-center mt-14 md:mt-36">
              <img src="img/promo.svg" alt="" className="w-[40px] md:w-[60px] mx-auto" />
              <h3 className="uppercase text-white font-normal text-[8px] mt-3 md:text-xs lg:text-sm md:mt-7 leading-5">
                Promo<span className="block">Melimpah</span>
              </h3>
            </figure>
            <figure className="text-center mt-14 mr-8 md:mr-24 md:mt-36 lg:mr-44">
              <img src="img/truk.svg" alt="" className="w-[40px] md:w-[60px] mx-auto" />
              <h3 className="uppercase text-white font-normal text-[8px] mt-3 md:text-xs lg:text-sm md:mt-7 leading-5">
                Pengiriman<span className="block">Instant</span>
              </h3>
            </figure>
          </div>
        </div>
      </section>
      {/* End Section Vape Img */}

      {/* Explore Sea Section */}
      <ExploreSea />
      {/* End Explore Sea */}

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}

export default App;
