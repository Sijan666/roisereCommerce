import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import { IoIosArrowDown } from "react-icons/io";

const HeaderTop = () => {
  return (
    <div className="bg-[#E53E3E] py-5">
      <Container>
        <Flex>
          <div className="w-[20%]">
            <ul className="flex items-center gap-6">
              <li className="font-medium text-sm text-white font-Jost">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="font-medium text-sm text-white font-Jost">
                My Account
              </li>
              <li className="font-medium text-sm text-white font-Jost">
                Wishlist
              </li>
              <li className="font-medium text-sm text-white font-Jost">
                Checkout
              </li>
            </ul>
          </div>
          <div className="w-[50%] text-center">
            <p className="font-medium text-sm text-white font-Jost">
              Free shipping for all orders of 150$
            </p>
          </div>
          <div className="w-[30%]">
            <ul className="flex items-center gap-6">
              <li className="font-medium text-sm text-white font-Jost">
                Store Location
              </li>
              <li className="text-white">|</li>
              <li className="font-medium text-sm text-white font-Jost flex items-center gap-1.5">
                Language
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
              <li className="text-white">|</li>
              <li className="font-medium text-sm text-white font-Jost flex items-center gap-1.5">
                Currency
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default HeaderTop;
