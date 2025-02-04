import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log("id : ", id);
  return (
    <div>
      <div>Detail</div>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default Detail;
