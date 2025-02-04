import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to={"/detail/1"}>To Detail 1</Link>
      <Link to={"/detail/2"}>To Detail 2</Link>
      <Link to={"/detail/3"}>To Detail 3</Link>
    </div>
  );
};

export default Home;
