import { createContext, useState } from "react";

export const Context = createContext();

const Favoriteproduct = ({ children }) => {
  const [list, setList] = useState([]);
  const [fav, setfav] = useState([]);
  const [count, setcount] = useState(0);
  const data = {
    list,
    setList,
    fav,
    setfav,
    count,
    setcount,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Favoriteproduct;
