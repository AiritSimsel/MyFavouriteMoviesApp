import React from "react";
import PageHeading from "./PageHeading";
import List from "./List";
import Footer from "./Footer";


export default function App() {
    
    
  return (
    <div>
      <PageHeading title="My favourite movies" />
      <List name="Interstellar" image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="Interstellar" />
      <List name="Wall-E" image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg" alt="Wall-E" />
      <List name="Little Shop of Horrors (1960)" image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8wukZauAXzmtG5uIsJwk4TO1yvo.jpg" alt="LSoH" />
      <Footer />
    </div>
  );
}
