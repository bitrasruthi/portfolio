import React from "react";

export const useCommonStates = () => {
  let [loading, setLoading] = React.useState(true);
  let [color, setColor] = React.useState("#ffffff");
  const [isScrolled, setIsScrolled] = React.useState<number>(0);
  const [selectedMenu, setSelectedMenu] = React.useState<string>("");
  return {
    loading,
    setLoading,
    color,
    setColor,
    isScrolled,
    setIsScrolled,
    selectedMenu,
    setSelectedMenu,
  };
};
