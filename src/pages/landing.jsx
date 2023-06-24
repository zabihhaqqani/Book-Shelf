import React from 'react'
import { useDataContext } from '../components/context/context'
import ProductCard from '../components/product/productCard';
import "./landing.css"
function LandingPage() {
    const { booksDb } = useDataContext();
  return (
    <div className="main-page-container">
      <h2>Book Shelf</h2>
      <hr />
      <h3>Currently Reading</h3>
      <div className="section-container">
        {booksDb?.map((item) =>
          item.category === "Currently Reading" ? (
            <ProductCard key={item.id} book={item} />
          ) : (
            ""
          )
        )}
      </div>
      <hr />
      <h3>Want To Read</h3>
      <div className="section-container">
        {booksDb?.map((item) =>
          item.category === "Want to Read" ? (
            <ProductCard key={item.id} book={item} />
          ) : (
            ""
          )
        )}
      </div>
      <hr />

      <h3>Read</h3>
      <div className="section-container">
        {booksDb?.map((item) =>
          item.category === "Read" ? (
            <ProductCard key={item.id} book={item} />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default LandingPage