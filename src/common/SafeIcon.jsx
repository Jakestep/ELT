import React from "react";
import * as FiIcons from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";

const SafeIcon = ({ children, name, ...props }) => {
  let IconComponent;
  try {
    IconComponent = children || (name && FiIcons[`Fi${name}`]);
  } catch (e) {
    IconComponent = null;
  }
  if (!IconComponent) {
    console.log("could not find icon: " + `Fi${name}`)
  }
  return IconComponent ? (
    React.createElement(IconComponent, props)
  ) : (
    <FiAlertTriangle {...props} />
  );
};

export default SafeIcon;
