import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

function Cart() {
  return (
    <>
      <section className="mt-32 mb-26">
        <h1 className="text-[#242323] text-center text-4xl font-medium leading-8">Your Cart</h1>
        <div className="flex mt-5 bg-[#242323] mx-36 p-4 text-white border rounded-xl">
          <div className="flex items-center gap-4">
            <img src="./img/cart4.png" alt="" width={134} className="rounded-xl" />
            <p className="text-lg font-normal leading-normal">
              Pod X Signature green satin <span className="block text-sm tracking-tight">Rp.116.800</span>
            </p>
          </div>
          <div className="flex lg:ml-[31rem] items-end ml-20 gap-1">
            <CiSquareMinus />
            <p className="text-[10px]"> 1</p>
            <CiSquarePlus />
          </div>
          <div className="flex">
            <FaRegTrashAlt />
          </div>
        </div>
        <div className="flex mt-5 bg-[#242323] mx-36 p-4 text-white border rounded-xl">
          <div className="flex items-center gap-4">
            <img src="./img/cart5.png" alt="" width={134} className="rounded-xl" />
            <p className="text-lg font-normal leading-normal">
              RELX Artisan Metal Silver <span className="block text-sm tracking-tight">Rp.280.000</span>
            </p>
          </div>
          <div className="flex items-end lg:ml-[32rem] ml-[102px] gap-1">
            <CiSquareMinus />
            <p className="text-[10px]"> 1</p>
            <CiSquarePlus />
          </div>
          <div className="flex">
            <FaRegTrashAlt />
          </div>
        </div>
        <div className="flex mt-5 bg-[#242323] mx-36 p-4 text-white border rounded-xl">
          <div className="flex items-center gap-4">
            <img src="./img/cart6.png" alt="" width={134} className="rounded-xl" />
            <p className="text-lg font-normal leading-normal">
              NITROUS ZAION KIT - ISABELLA <span className="block text-sm tracking-tight">Rp.1.260.000</span>
            </p>
          </div>
          <div className="flex items-end ml-20 gap-1 lg:ml-[28rem] ">
            <CiSquareMinus />
            <p className="text-[10px]"> 1</p>
            <CiSquarePlus />
          </div>
          <div className="flex">
            <FaRegTrashAlt />
          </div>
        </div>
        <div className="flex mt-5 bg-[#242323] mx-36 p-4 text-white border rounded-xl">
          <div className="flex items-center gap-4">
            <img src="./img/cart7.png" alt="" width={134} className="rounded-xl" />
            <p className="text-lg font-normal leading-normal">
              Menthe Fraîche Le Petit -Verger <span className="block text-sm tracking-tight">Rp.89.500</span>
            </p>
          </div>
          <div className="flex items-end ml-20 gap-1 lg:ml-[29rem]">
            <CiSquareMinus />
            <p className="text-[10px]"> 1</p>
            <CiSquarePlus />
          </div>
          <div className="flex">
            <FaRegTrashAlt />
          </div>
        </div>
        <div className="flex mt-5 bg-[#242323] mx-36 p-4 text-white border rounded-xl">
          <div className="flex items-center gap-4">
            <img src="./img/cart8.png" alt="" width={134} className="rounded-xl" />
            <p className="text-lg font-normal leading-normal">
              WAKA soMatch Mini Device Teal Green <span className="block text-sm tracking-tight">Rp.150.000</span>
            </p>
          </div>
          <div className="flex items-end ml-20 gap-1 lg:ml-[25rem]">
            <CiSquareMinus />
            <p className="text-[10px]"> 1</p>
            <CiSquarePlus />
          </div>
          <div className="flex">
            <FaRegTrashAlt />
          </div>
        </div>
        <div className="mb-24">
          <hr className="mt-16 mx-44 border-1 border-[#242323]" />
        </div>
      </section>
    </>
  );
}

export default Cart;
