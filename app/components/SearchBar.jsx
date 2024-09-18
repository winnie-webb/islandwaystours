"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { searchProduct } from "../products/product";

function SearchBar() {
  const [isSearching, setIsSearching] = useState(false);
  const [products, setProducts] = useState([]);
  return (
    <div className="flex-1 relative w-full">
      <input
        id="search-input"
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
        onChange={(e) => setProducts(searchProduct(e.target.value))}
        className=" shadow-md w-full border-white rounded-full outline-none p-3 border-[3px] focus:border-[3px] focus:border-orange-300 transition-all duration-200"
        placeholder="Search tours..."
      />

      <div
        className={`${
          isSearching ? "flex" : "hidden"
        } w-full p-4 absolute shadow-md gap-y-4 flex-col z-10 bg-white font-bold`}
      >
        {products.length === 0
          ? "No matching results"
          : products.map((product) => {
              return (
                <Link
                  href={`/products/${product.id}`}
                  key={` ${Math.random().toString(36).substr(2, 9)}`}
                >
                  <div className="flex items-center gap-x-3">
                    <Image
                      alt={`Image of ${product.title}`}
                      width={50}
                      height={50}
                      src={`/${product.id.split("-").shift()}/${
                        product.id
                      }.webp`}
                    ></Image>
                    <p>{product.title}</p>
                    <p>{`$${product.priceLowest}`}</p>
                  </div>
                </Link>
              );
            })}
      </div>

      <FaSearch className="absolute right-4 top-4 text-primary text-xl cursor-pointer" />
    </div>
  );
}

export default SearchBar;
