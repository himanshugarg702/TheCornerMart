import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  var [displayPage,setToShow]=useState(products)
  const compare = (a, b, ascendingOrder) => {
    if (a < b ) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b ) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  }
  const handleChangee = (value) => {
    if(value === 'none'){
        setToShow([...products])
    } else {
      let toType, toAscending
      switch(value){
        case 'ascending' : toType = true; toAscending = true; break;
        case 'descending' : toType = true; toAscending = false; break;
        case 'high' : toType = false; toAscending = true; break;
        case 'low' : toType = false; toAscending = false; break;
      }
      let current = [...products]
      current.sort((a, b) => toType ?
             compare(a.title, b.title, toAscending) 
             : 
             compare(a.price, b.price, toAscending))
      setToShow([...current])
    }
  }
  const searchedProduct = displayPage.filter((item) => {
     
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });
  displayPage=searchedProduct.slice()
  
  // const productPerPage = 12;
  // const visitedPage = pageNumber * productPerPage;
  // displayPage = searchedProduct.slice(
  //   visitedPage,
  //   visitedPage + productPerPage
  // );
 
  // console.log(displayPage.length);
  // if(displayPage.length===0){
  //  return <h1>The product You are searching is not available</h1>
  // }

  // const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleChange = (e) =>{
    console.log(e.target)
  }

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Grocery" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50" onChange={(e) => handleChangee(e.target.value)}>
                  <option value="none">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="low">High Price</option>
                <option value="high">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            {/* <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
                value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
