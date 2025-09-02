import React from "react";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from 'react-icons/fa'
import { FiAlertTriangle } from "react-icons/fi";

const SafeIcon = ({ children, name, ...props }) => {
  let IconComponent;
  try {
    if (name.slice(0,2) == 'Fa') {
      IconComponent = children || (name && FaIcons[`${name}`]);
    } else if (name.slice(0,2) == 'Fi') {
      IconComponent = children || (name && FiIcons[`${name}`]);
    }
    if (!IconComponent) {IconComponent = children || (name && FiIcons[`Fi${name}`]);}
    if (!IconComponent) {IconComponent = children || (name && FaIcons[`Fa${name}`]);}
  } catch (e) {
    IconComponent = null;
  }
  if (!IconComponent) {
    console.log("could not find icon: " + `Fi${name}`);
  }
  return IconComponent ? (
    React.createElement(IconComponent, props)
  ) : (
    <FiAlertTriangle {...props} />
  );
};

export default SafeIcon;
