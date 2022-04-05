import React from "react";
import PageHeading from "./PageHeading";
import List from "./List";
import Footer from "./Footer";
import movies from "../movies";
import Timer from "./Timer";


export default function App() {

  function createList(movie) {
    return (
      <List 
        key={movie.id}
        name={movie.name}
        image={movie.image}
        alt={movie.alt}
      />
    )
  }
    
    
  return (
    <>
      <PageHeading title="My favourite movies" />
      <Timer />
      {movies.map(createList)}      
      <Footer />
    </>
  );
}
