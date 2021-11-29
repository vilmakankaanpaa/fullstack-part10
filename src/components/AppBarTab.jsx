import React from "react";
import Text from "./Text";

const AppBarTab = (props) => {
  return (
    <Text 
      color= 'tab' fontSize='tab' fontWeight="bold"
      {...props} 
    />
  );
};

export default AppBarTab;