import RootLayouts from "@/components/Layouts/RootLayouts";
import ProductCat from "@/components/ui/ProductCat";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import React from "react";

const products = () => {
  const { currentData } = useGetProductsQuery();
  console.log(currentData);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 sm:grid-cols-1 items-center w-[80%] mx-auto my-10">
      {currentData?.map((product) => (
        <ProductCat product={product} />
      ))}
    </div>
  );
};

export default products;
products.getLayout = function (page) {
  return <RootLayouts>{page}</RootLayouts>;
};
