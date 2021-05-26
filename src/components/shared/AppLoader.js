import React from "react";
//assets
import Logo from "../../assets/img/logo-mini.png";

const AppLoader = () => {
  return (
    <div class="loader">
      <img src={Logo} alt="Loader" />
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default AppLoader;
