import { Link } from "react-router-dom";
import Button from "../Button";
import Container from "../Container";

const Banner = () => {
  return (
    <>
      {/* <h1>Nabil</h1> */}
      <div className=" bg-[url(/src/assets/bgImg.png)] py-45 bg-no-repeat bg-center bg-cover">
        <Container>
          <div className="w-100 ml-220">
            <p className="text-sm text-[#E53E3E] w-[300px] pb-[30px] uppercase">
              ummer 22 women’s collection
            </p>
            <h1 className="font-semibold text-5xl text-[#1A1A1A] pb-[50px] w-[460px]">
              SUPER COLLECTION FOR WOMEN
            </h1>
            <div className="flex items-baseline pb-10">
              <p className="text-[#1A1A1A] text-[16px]">From</p>
              <p className="text-[#E53E3E] font-bold text-[30px]">$320.00</p>
            </div>
            <Link to={"/about"}>
              <Button
                btnText={"View Collections"}
                className={"bg-[#E53E3E] text-white"}
              />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
