import React from "react";

//Closure -> Kuch New Tarike se sikhte hai
const Closeres = () => {
  var sum = function (a) {
    return {
      dipak: (b) => {
        return a + b;
      },

      raju: (c) => {
        return a + c;
      },
    };
  };
  var store = sum(2);

  console.log("first", store.dipak(2));
  console.log("second", store.raju(6));
  return;
  <></>;
};
export default Closeres;
