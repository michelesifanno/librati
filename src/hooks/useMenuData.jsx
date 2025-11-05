import { useState, useEffect } from "react";
import menuData from "../../data/menu.json"

export function useMenuData() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Potresti poi sostituire menuData con una fetch() API
    setData(menuData);
  }, []);

  const categories = Object.keys(menuData);
  return { data, categories };
}