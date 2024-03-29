import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((d) => setData(d[currency]));
    console.log(data);
    console.table(data);
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
