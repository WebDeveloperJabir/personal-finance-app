import React, { createContext, useState, useEffect } from "react";

export const AppFinanceData = createContext();

export function FinanceDataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/assets/datas/data.json")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error("Error loading finance data:", err));
  }, []);

  return (
    <AppFinanceData.Provider value={{ data, setData }}>
      {children}
    </AppFinanceData.Provider>
  );
}
