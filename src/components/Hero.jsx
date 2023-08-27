import React from "react";
import { logo } from "../assets/";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col ">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="shrink_ray_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/chiranth6-72")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Create concise summaries of articles with Sumz using the power of{" "}
        <br className="max-md:hidden" />
        <span className="hover:animate-pulse animate-none orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Make reading easier with ShrinkRay, a free text summarization tool that
        reduces long articles to short, straightforward summaries*.
      </h2>
      <h3 className="mt-5 text-sm text-gray-600 w-[40%] text-center">
        *Note: This is an experimental feature. It may not summarize all articles accurately. Works best on mainstream news/docs websites.
      </h3>
    </header>
  );
};

export default Hero;
