import RootLayouts from '@/components/Layouts/RootLayouts';
import { useCreateCartMutation, useGetCurrentUserQuery, useGetProductsQuery } from '@/redux/api/baseApi';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const productId = ({product}) => {
    const params = useParams();
    const [color,setColor] = useState('');
    const [size,setSize] = useState('');
    const {currentData  } = useGetProductsQuery();
    const data = useGetCurrentUserQuery();
    const [setCart,res] = useCreateCartMutation();
    const productDetails = currentData?.find(product=>product?._id===params?.productId);
    
    const currentUser = {...data?.data}
    console.log(currentUser[0]);
    const handleAddCart = ()=>{
        setCart({email:currentUser[0].email,image:productDetails?.image,title:productDetails?.title,size,color,qt:1})
        // params.push('/cart');
    }
    // console.log(productDetails);
    // console.log(color,size);
    

    return (
        <div className='grid grid-cols-6 w-[80%] mx-auto gap-5 my-24'>
            <div className='col-span-2'>
           <img className='rounded-lg' src={productDetails?.image} alt="" />
            </div>
            <div className='col-span-4'>
                <h1 className='text-5xl '>{productDetails?.title}</h1>
                <p className='text-4xl font-bold mt-5'>${productDetails?.price}</p>
                <img className='mt-5' src="https://believerssign.com/wp-content/uploads/2023/03/panjabi-large.png" alt="" />

                <div className="card-actions py-2">
          <select
            className="w-40 outline-none border border-black rounded-lg px-2 font-semibold"
            name=""
            id=""
            onClick={(e) => setColor(e.target.value)}
          >
            <option className={`w-[100%] bg-[${color}]`} value="">Color</option>
            {productDetails?.variation?.color.map((color, index) => (
              <option className={`checked:bg-[${color}]-500`} key={index} value={color}>
            
               {color}
                
              
               
              </option>
            ))}
          </select>
        <select
            className="w-40 outline-none border border-black rounded-lg px-2 font-semibold"
            name=""
            id=""
            onClick={(e) => setSize(e.target.value)}
          >
            <option value="">Size</option>
            {productDetails?.variation?.size?.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
        </select>
      
        </div>
        <p onClick={handleAddCart}  className='w-[30%] py-2 text-center bg-black text-white'>ADD TO CART</p>
        <p className='text-gray-400 text-xl mt-5'>Description:</p>
        <p className='text-gray-400 text-xs'>{productDetails?.description}</p>
        </div> 
        </div>
    );
};

export default productId;
productId.getLayout = function (page) {
    return <RootLayouts>{page}</RootLayouts>
}

// export const getStaticPaths = async ()=>{

//     const res =  await fetch( `http://localhost:8000/products`)
//     const data = await res.json();
//     const paths = data.map((product)=>({
//         params:{
//             productId:product._id
//         }
//     }))
//     return {paths,fallback:false}
// }
// export const getStaticProps = async (context)=>{
//     const {params} = context;
//     // console.log(params.productId);
//     const res = await fetch (`http://localhost:8000/products${params.productId}`);
//     const data = await res.json();
// // console.log(data)
//     return {
//         props:{
//             product:data
//         }
//     }

// }