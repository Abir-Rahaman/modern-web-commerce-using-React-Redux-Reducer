import React from "react";
import bg from "../Asset/images/bg-dot.png";
import { BiSearchAlt2 } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
      className=""
    >
      <div class="hero  mt-12">
        <div class="hero-content text-center">
          <div class="">
            <h1 class="text-4xl font-bold">
              Over <span className="text-orange-400">6,500 </span> Curated Design
            </h1>
            <h1 class="text-4xl font-bold">
              Resources, <span className="text-orange-400"> Graphic & Website </span>Templates
            </h1>
            <p class="py-12">High-quality Design Themes for personal or commercial use contains 6k+ items in 100 categories.</p>
            <div class="form-control">
              <input type="text" placeholder=" All Categories   |    Type here" class="input border-2 input-bordered input-accent w-full " />
              <button style={{ paddingLeft:'600px' }}  className="relative bottom-8 text-xl">
                <span>
                  <BiSearchAlt2 />
                </span>
              </button>
            </div>
            <p class="">  Examples: Mockup, PSD, Theme Design, Image……</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
