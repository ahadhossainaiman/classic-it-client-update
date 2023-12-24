import RootLayouts from "@/components/Layouts/RootLayouts";
import { useGetCartQuery, useGetCurrentUserQuery } from "@/redux/api/baseApi";
import React from "react";

const AddToCart = () => {
  const { currentData } = useGetCartQuery();
  const { currentData: user } = useGetCurrentUserQuery();
  console.log(currentData);
  //   console.log(user[0]);
  const cartData = currentData?.find(
    (cartProduct) => cartProduct?.email === user[0]?.email
  );
  console.log(cartData);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Color</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartData?.products?.map((cd, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td className="w-16">
                    <img src={cd?.image} alt="" />
                  </td>
                  <td>{cd?.title}</td>
                  <td>
                    <span
                      style={{ backgroundColor: `${cd?.color}` }}
                      className={`py-1 px-3 rounded-full`}
                    >
                      color
                    </span>
                  </td>
                  <td>{cd?.size}</td>
                  <td>{cd?.qt}</td>
                  <td>{cd?.price}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddToCart;
AddToCart.getLayout = function (page) {
  return <RootLayouts>{page}</RootLayouts>;
};
