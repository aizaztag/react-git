import React from "react";

export const Name = ({resource}) => {
    return  resource.name.read();
};