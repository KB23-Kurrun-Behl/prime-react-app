import React from "react";
import LogoContainer from "../components/LogoContainer";
import Navigation from "../components/Navigation";
import HeroVideo from "../components/HeroVideo";
import Heading from "../components/Heading";
import Hydration from "../components/Hydration";
import Energy from "../components/Energy";
import About from "../components/About";
// import heroproducts from "../heroProducts";
import Features from "../components/Features";
import DiscoverProducts from "../components/DiscoverProducts";
import Footer from "../components/Footer";
import "../components/styles.css";

// function createProduct(productItem) {
//   return (
//     <HeroProducts
//       key={productItem.key}
//       img={productItem.img}
//       name={productItem.name}
//     />
//   );
// }

function App() {
  return (
    <div>
      <LogoContainer />
      <Navigation />
      <HeroVideo />
      <Heading heading="HYDRATION" />
      <Hydration />
      <Heading heading="ENERGY" />
      <Energy />
      <Heading heading="ABOUT PRIME" />
      <About />
      <Features />
      <DiscoverProducts />
      <Footer />
    </div>
  );
}

export default App;
