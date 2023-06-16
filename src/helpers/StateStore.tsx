import React from "react";

export const useCommonStates = () => {
  let [loading, setLoading] = React.useState(true);
  let [color, setColor] = React.useState("#ffffff");
  const [isScrolled, setIsScrolled] = React.useState(0);
  return {
    loading,
    setLoading,
    color,
    setColor,
    isScrolled,
    setIsScrolled,
  };
};
