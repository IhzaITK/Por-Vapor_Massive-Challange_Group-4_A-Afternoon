import { Link } from "react-router-dom";

function Pay() {
  return (
    <>
      <section className="">
        <div className="w-full flex items-center justify-between py-2 px-5 ">
          <div className="flex">
            <h3 className="text-lg font-semibold text-coklat">
              Subtotal <span className="block text-[10px] font-normal">Delivery & taxes calculated at checkout</span>
            </h3>
          </div>
          <p className="text-coklat text-xl font-bold ml-24">Rp.1,895,000</p>
          <button className="w-64 bg-coklat p-1 text-white font-semibold text-lg border-1 rounded-xl">
            <Link to="/checkout">Checkout Now</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Pay;
