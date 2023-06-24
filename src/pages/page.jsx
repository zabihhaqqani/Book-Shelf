import React, { useState } from "react";
import { useDataContext } from "../components/context/context";
import ProductCard from "../components/product/productCard";

function Page() {
  const {booksDb} = useDataContext()
  const [search,setSearch] = useState('')

 
  const filteredData = [...booksDb]?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())||item.author.toLowerCase().includes(search.toLowerCase())
  );
   return (
     <div>
       <h3>Search</h3>
       <input
         type="text"
         placeholder="search based on title or author"
         onChange={(e) => {
           setSearch(e.target.value);
         }}
       />
       <div className="section-container">
         {filteredData?.map((book) => {
           return <ProductCard key={book.id} book={book} />;
         })}
       </div>
     </div>
   );
}

export default Page;
