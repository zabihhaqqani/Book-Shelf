import { createContext, useContext, useState } from "react";
import { data } from "../../data";

export const Context = createContext()

function ContextProvider({children}) {

  const [booksDb,setBooksDb]  = useState(data)
  
  const setInputHandler = (selectedCategory,BookId) => {
    console.log(selectedCategory, BookId);
    let updatedBooks = [...booksDb]; 
    updatedBooks= updatedBooks?.map((book) =>{
      if (selectedCategory === "None") {
        return book
      }else{

       return book.id === BookId ? { ...book, category: selectedCategory } : book
      }
    });
    setBooksDb(updatedBooks);

  }

  return (
    <Context.Provider value={{ setInputHandler,booksDb }}>{children}</Context.Provider>
  );
}

export default ContextProvider;

export const useDataContext = () => useContext(Context)