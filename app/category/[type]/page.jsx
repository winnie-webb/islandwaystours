import Category from "@/app/components/Category";
import { filterProductByCategory } from "@/app/products/product";
import React from "react";

function page({ params }) {
  const { type } = params;
  let title = "";
  console.log(type);
  switch (type) {
    case "mpt":
      title = "Most Popular Tours";
      break;
    case "at":
      title = "Airport Transfers";
      break;
    case "cse":
      title = "Cruise Shore Excursions";
      break;
    case "ctp":
      title = "Combo Tour Packages";
      break;
    case "egt":
      title = "Exclusive Golf Tours";
      break;
    case "st":
      title = "Shopping Tours";
      break;
    case "abc":
      title = "Attractions / Beach / City Tours";
      break;
    case "edt":
      title = "Eating / Dining Tours";
      break;
    default:
      title = "Other Tours";
  }
  return (
    <Category
      title={title}
      data={filterProductByCategory(type)}
      itemsPerPage={3}
    ></Category>
  );
}

export default page;
