import Banner from "../layouts/Banner";
import CategoryCollection from "../layouts/CategoryCollection";
import Deal from "../layouts/Deal";
import Blog from "../layouts/Blog";
import Discount from "../layouts/Discount";

const Home = () => {
  return (
    <>
      <Banner />
      <Discount/>
      <CategoryCollection />
      <Deal />
      <Blog />
    </>
  );
};

export default Home;
