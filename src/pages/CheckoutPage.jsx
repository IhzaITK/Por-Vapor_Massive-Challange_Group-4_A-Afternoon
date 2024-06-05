import Header from "../components/Header";
import Footer from "../components/Footer";

function CheckoutPage() {
  return (
    <>
      <Header />

      <section className="mt-32 mb-36 flex flex-wrap-reverse md:flex-nowrap">
        {/* Section Pay */}
        <div className="w-full border-solid border-r-2 border-r-abu ">
          <div className="w-full px-10 mt-16 ">
            <div className="">
              <h2 className="text-lg font-medium mb-2">Contact</h2>
              <form action="#" className="">
                <input type="email" name="email" id="email" placeholder="Email" className="border-2 w-full border-coklat h-8 px-4 py-2 text-abu rounded-md" /> <br />
                <input type="checkbox" name="email" value="email" className="w-4 h-4 mt-2" />
                <label htmlFor="email" className="text-dark text-xs font-normal ml-2">
                  Email me with news and offers
                </label>
              </form>
            </div>
            <div className="mt-6 w-full ">
              <h2 className="text-dark text-lg font-medium mb-2">Delivery</h2>
              <form action="#">
                <div className="flex gap-4 mb-2">
                  <input type="text" name="first_name" id="first_name" placeholder="First Name" className="border-2 w-1/2 px-4 border-abu h-8 py-2 text-abu rounded-md" />
                  <input type="text" name="last_name" id="last_name" placeholder="Last Name" className="border-2 w-1/2 px-4 border-abu h-8 py-2 text-abu rounded-md" />
                </div>
                <input type="text" name="company" id="company" placeholder="Company (optional)" className="border-2 w-full px-4 border-abu h-8 py-2 text-abu rounded-md mb-2 " /> <br />
                <input type="text" name="address" id="address" placeholder="Address" className="border-2 w-full px-4 border-abu h-8 py-2 text-abu rounded-md mb-2" /> <br />
                <input type="text" name="apartment" id="apartment" placeholder="Apartment, suite, etc (optional)" className="border-2 w-full px-4 border-abu h-8 py-2 text-abu rounded-md mb-2" /> <br />
                <input type="text" name="city" id="city" placeholder="City" className="border-2 w-full px-4 border-abu h-8 py-2 text-abu rounded-md mb-2" />
                <div className="flex gap-4 mb-2">
                  <input type="text" name="province" id="province" placeholder="Province" className="border-2 w-1/2 px-4 border-abu h-8 py-2 text-abu rounded-md" />
                  <input type="number" name="postal_code" id="postal_code" placeholder="Postal Code" className="border-2 w-1/2 px-4 border-abu h-8 py-2 text-abu rounded-md" />
                </div>
                <input type="number" name="phone" id="phone" placeholder="Phone" className="border-2 w-full px-4 border-abu h-8 py-2 text-abu rounded-md mb-2" />
              </form>
            </div>
            <div>
              <h2 className="text-dark text-md font-medium mt-6 ">Payment</h2>
              <p className="font-normal text-[10px] opacity-55 ">All transactions are secure and encrypted.</p>
              <div className="mt-2 border-solid border-2 pb-10 border-abu rounded-md">
                <form action="#">
                  <div className="flex justify-between m-4 py-2  px-4 border-solid border-2 border-[rgba(102, 102, 102, 0.70)] ">
                    <img src="/img/dana.png" alt="dana" width={60} />
                    <input type="radio" name="pay" />
                  </div>
                  <div className="flex justify-between m-4 py-2  px-4 border-solid border-2 border-[rgba(102, 102, 102, 0.70)]">
                    <img src="/img/paypal.png" alt="dana" width={60} />
                    <input type="radio" name="pay" />
                  </div>
                  <div className="flex justify-between m-4 py-2  px-4 border-solid border-2 border-[rgba(102, 102, 102, 0.70)]">
                    <img src="/img/shoppe.png" alt="dana" width={40} />
                    <input type="radio" name="pay" />
                  </div>
                  <div className="flex justify-between m-4 py-2  px-4 border-solid border-2 border-[rgba(102, 102, 102, 0.70)]">
                    <img src="/img/gopay.png" alt="dana" width={60} />
                    <input type="radio" name="pay" />
                  </div>
                  <div className="flex justify-between m-4 py-2  px-4 border-solid border-2 border-[rgba(102, 102, 102, 0.70)]">
                    <img src="/img/ovo.png" alt="dana" width={40} />
                    <input type="radio" name="pay" />
                  </div>
                </form>
              </div>

              <button className="w-full bg-coklat p-1 text-white font-semibold text-lg border-1 rounded-xl mt-6 mb-10">Pay Now</button>
            </div>
          </div>
        </div>
        {/* End Section Pay */}

        {/* Section Items */}
        <div className="w-full bg-[#F7F6EC]">
          <div className="md:mt-36 w-full mb-10 md:mb-0">
            <div className="mt-5 bg-[#242323] py-2 px-auto mx-10 text-white border rounded-xl">
              <div className="flex justify-between w-full  items-center gap-4  ">
                <div className="flex items-center gap-2 ml-4">
                  <img src="./img/cart4.png" alt="" width={45} className="rounded-xl" />
                  <p className="text-[10px] font-normal leading-normal">Pod X Signature green satin</p>
                </div>
                <p className="text-[10px] font-normal leading-normal mr-4">Rp.116.800</p>
              </div>
            </div>
            <div className="mt-5 bg-[#242323] py-2 px-auto mx-10 text-white border rounded-xl">
              <div className="flex justify-between w-full  items-center gap-4  ">
                <div className="flex items-center gap-2 ml-4">
                  <img src="./img/cart5.png" alt="" width={45} className="rounded-xl" />
                  <p className="text-[10px] font-normal leading-normal">RELX Artisan Metal Silver</p>
                </div>
                <p className="text-[10px] font-normal leading-normal mr-4">Rp.280.000</p>
              </div>
            </div>
            <div className="mt-5 bg-[#242323] py-2 px-auto mx-10 text-white border rounded-xl">
              <div className="flex justify-between w-full  items-center gap-4  ">
                <div className="flex items-center gap-2 ml-4">
                  <img src="./img/cart6.png" alt="" width={45} className="rounded-xl" />
                  <p className="text-[10px] font-normal leading-normal">NITROUS ZAION KIT - ISABELLA</p>
                </div>
                <p className="text-[10px] font-normal leading-normal mr-4">Rp.1.260.000</p>
              </div>
            </div>
            <div className="mt-5 bg-[#242323] py-2 px-auto mx-10 text-white border rounded-xl">
              <div className="flex justify-between w-full  items-center gap-4  ">
                <div className="flex items-center gap-2 ml-4">
                  <img src="./img/cart7.png" alt="" width={45} className="rounded-xl" />
                  <p className="text-[10px] font-normal leading-normal">Menthe Fraîche Le Petit -Verger</p>
                </div>
                <p className="text-[10px] font-normal leading-normal mr-4">Rp.89.500</p>
              </div>
            </div>
            <div className="mt-5 bg-[#242323] py-2 px-auto mx-10 text-white border rounded-xl">
              <div className="flex justify-between w-full  items-center gap-4  ">
                <div className="flex items-center gap-2 ml-4">
                  <img src="./img/cart8.png" alt="" width={45} className="rounded-xl" />
                  <p className="text-[10px] font-normal leading-normal">WAKA soMatch Mini Device Teal Green</p>
                </div>
                <p className="text-[10px] font-normal leading-normal mr-4">Rp.150.000 </p>
              </div>
            </div>
            <div className="mt-6 mx-10 text-dark text-[8px] font-normal">
              <div className="flex justify-between">
                <h3>Subtotal</h3>
                <p className="font-semibold">Rp 1,895,000</p>
              </div>
              <div className="flex justify-between mt-2">
                <h3>Shipping</h3>
                <p className="opacity-55">Enter shipping address</p>
              </div>
              <div className="flex justify-between mt-3">
                <h3 className="text-sm font-bold">Total</h3>
                <p className="text-sm font-bold">
                  <span className="mr-3 opacity-55 text-[8px] font-normal">IDR</span> 1,895,000
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Section Items */}
      </section>

      <Footer />
    </>
  );
}

export default CheckoutPage;
