import React from "react";

export const Name = ({resource}) => {
    console.log('dfd' , resource.test.read())
    return resource.test.read();
    return  resource.name.read();
};