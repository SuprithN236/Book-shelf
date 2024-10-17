import React from "react";
import Banner from "../components/Banner";
import BestSellerBooks from "../components/BestSellerBooks";
import FavouriteBook from "../components/FavouriteBook";
import PromoBanner from "../components/PromoBanner";
import OtherBooks from "../components/OtherBooks";
import CustomerReview from "../components/CustomerReview";
import { MyFooter } from "../components/MyFooter";

function Home() {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <FavouriteBook />
      <PromoBanner />
      <OtherBooks />
      <CustomerReview />
    </div>
  );
}

export default Home;
