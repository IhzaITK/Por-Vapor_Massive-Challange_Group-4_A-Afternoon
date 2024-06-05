import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-coklat h-60">
        <div className="w-full">
          <div className="flex p-4 md:p-8 text-white justify-around gap-2 md:gap-8 mb-20 ">
            <div className="max-w-[120px] md:max-w-[240px]">
              <p className="text-[6px] md:text-xs lg:text-sm font-medium mb-2">Otherways is a trademarks and/or registered trademarks of Por-Vapour Ltd or its registered</p>
              <p className="text-[6px] md:text-xs lg:text-sm font-bold">We do not sell personal information</p>
            </div>
            <div>
              <h3 className="text-[6px] md:text-xs lg:text-sm font-bold">WE POST COOL STUFF</h3>
              <div className="flex md:w-6 gap-1 mt-2">
                <a href="https://tiktok.com/@vmonreve">
                  <FaTiktok className="w-2 lg:w-4" />
                </a>
                <a href="https://instagram.com/vmonreve21">
                  <FaInstagram className="w-2 lg:w-4" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-[6px] md:text-xs lg:text-sm font-bold">HAVE QUESTIONS?</h3>
              <p className="text-[6px] md:text-xs lg:text-sm font-medium mt-2">ask@por.vapor</p>
            </div>
            <div>
              <h3 className="text-[6px] md:text-xs lg:text-sm font-bold mb-2">LEGAL STUFF</h3>
              <p className="text-[6px] md:text-xs lg:text-sm font-medium mb-2">Privacy Policy</p>
              <p className="text-[6px] md:text-xs lg:text-sm font-medium">Cookie Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
