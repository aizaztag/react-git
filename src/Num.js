import React from "react";

export const Num = ({ resource }) => {
  return resource.test.read();

  const n = resource.num.read();
  return <div>your random number is: {n}</div>;
};