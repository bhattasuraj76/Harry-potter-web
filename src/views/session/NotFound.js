import React from "react";
import { Link } from "react-router-dom";

const NOT_FOUND = "404 Page Not Found";

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <p className="text-muted mb-3">Oops.. {NOT_FOUND}</p>
      <Link to="/" className="go-back">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
