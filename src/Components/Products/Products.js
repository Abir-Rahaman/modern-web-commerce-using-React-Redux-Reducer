import React from "react";
import img1 from '../Asset/images/hero/cate-h11.png'
import img2 from '../Asset/images/hero/cate-h11_1.png'
import img3 from '../Asset/images/hero/cate-h11_2.png'
import img4 from '../Asset/images/hero/cate-h11_3.png'
import img5 from '../Asset/images/hero/cate-h11_5.png'

const Products = () => {
  return (
    <div className="lg:flex lg:justify-center gap-6 mt-24 grid grid-cols-2 justify-center">
      <div className="flex gap-6 items-center bg-stone-900 px-8  rounded-3xl py-4 shadow-2xl hover:cursor-pointer">
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
          <img src={img5} alt="sdfh"/>
          </div>
        </div>
         <div className="">
            <h5 className=" font-bold">Web Themes</h5>
            <p className="text-gray-500 font-bold">5 items</p>
         </div>
      </div>
      <div className="flex gap-6 items-center bg-stone-900 px-8  rounded-3xl py-4 shadow-2xl hover:cursor-pointer">
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
            <img src={img2} alt="sdfh"/>
          </div>
        </div>
         <div className="">
            <h5 className=" font-bold">UI Design</h5>
            <p className="text-gray-500 font-bold">12 items</p>
         </div>
      </div>
      <div className="flex gap-6 items-center bg-stone-900 px-8  rounded-3xl py-4 shadow-2xl hover:cursor-pointer">
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
          <img src={img3} alt="sdfh"/>
          </div>
        </div>
         <div className="">
            <h5 className=" font-bold">3D Model</h5>
            <p className="text-gray-500 font-bold">23 items</p>
         </div>
      </div>
      <div className="flex gap-6 items-center bg-stone-900 px-8  rounded-3xl py-4 shadow-2xl hover:cursor-pointer">
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
          <img src={img4} alt="sdfh"/>
          </div>
        </div>
         <div className="">
            <h5 className=" font-bold">Image Stoke</h5>
            <p className="text-gray-500 font-bold">45 items</p>
         </div>
      </div>
      <div className="flex gap-6 items-center bg-stone-900 px-8  rounded-3xl py-4 shadow-2xl hover:cursor-pointer">
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
          <img src={img1} alt="sdfh"/>
          </div>
        </div>
         <div className="">
            <h5 className=" font-bold">Mockup Design</h5>
            <p className="text-gray-500 font-bold">6 items</p>
         </div>
      </div>
     
      

     
    </div>
  );
};

export default Products;
