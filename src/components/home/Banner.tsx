import Image from "next/image";
import React from "react";
import bannerImg from "../../../assets/banner-img.jpg";
import Link from "next/link";
const Banner = () => {
  return (
    <section className="banner-home md:py-36 py-20 grid grid-cols-2 justify-between">
      <div className="md:pl-12 text-center md:text-left container">
        <h1 className="text-white font-bold font-serif text-2xl">🎉 Welcome to our services!</h1>
        <h1 className="text-white font-bold font-serif text-4xl mt-2">
          Let us make your Dreamy occasions <br className="hidden md:block" /> memorable.
        </h1>
        <button className="bg-accent button-shadow py-2 px-3 font-semibold text-white w-40 mt-4 rounded hover:scale-100 transition ease-in-out hover:transition-all">
          <Link href="/services">Find Services</Link>
        </button>
      </div>
      {/* <div>
        <Image src={bannerImg} width={400} height={600} alt="banner-image" className="border border-secondary rounded" />
      </div> */}
    </section>
  );
};

export default Banner;
