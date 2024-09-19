import Category from "@/app/components/Category";
import { filterProductByCategory } from "@/app/products/product";
import React from "react";
import getTitleFromType from "../getTitleFromType";

function page({ params }) {
  const { type } = params;
  return (
    <Category
      title={getTitleFromType(type)}
      data={filterProductByCategory(type)}
      itemsPerPage={3}
    ></Category>
  );
}

export default page;
