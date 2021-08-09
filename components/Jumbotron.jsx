import React from "react";

const Jumbotron = ( {children, customStyle} ) => {
    console.log(customStyle);
  return (
    <div className={['container-fluid py-5', customStyle.jumboCustom]}>
      {children}
    </div>
  );
};

export default Jumbotron;
