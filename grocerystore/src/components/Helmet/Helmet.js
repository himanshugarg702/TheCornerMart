import React from "react";
// import products from "../../assets/fake-data/products";
const Helmet = (props) => {
  document.title = "Food ordering app -" + props.title;
  return <div className="w-100">{props.children}</div>;
};
// export const lowPrice=products.sort((a,b)=>{
//   if(a.price>b.price) return 1;
//   if(a.price<b.price) return -1;
//   return 0;
//   });
export default Helmet;
