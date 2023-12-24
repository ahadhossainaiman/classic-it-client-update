import { Inter } from "next/font/google";
import RootLayouts from "@/components/Layouts/RootLayouts";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCat from "@/components/ui/ProductCat";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  // const { name, email, photo_url } = useSelector((state) => state.userSlice);
  // console.log(name, email, photo_url, "aiman");
  const { currentData } = useGetProductsQuery();
  console.log(currentData);
  return (
    <>
      <Head>
        <title>Trendy-Tech</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 sm:grid-cols-1 items-center w-[80%] mx-auto my-10">
        {currentData?.map((product) => (
          <ProductCat product={product} />
        ))}
      </div>
    </>
  );
}
HomePage.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
