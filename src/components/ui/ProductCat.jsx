import Link from "next/link";
import React from "react";

const ProductCat = ({product}) => {
    const {_id,title,image,price,variation} = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          T-Shirt
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{title}</p>
        
        <div className="card-actions justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold">${price}</h1>
        </div>
        <div className="">
         <Link href={`/product/${_id}`}> <div className="badge badge-outline cursor-pointer">Product Details</div></Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCat;
