import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "../features/books/AddBook";
import BooksView from "../features/books/BooksView";
import Navbar from "../layouts/Navbar";
import Home from "../Pages/Home";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="text-center">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/show-books" element={<BooksView></BooksView>} />
          <Route path="/add-book" element={<AddBook></AddBook>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
