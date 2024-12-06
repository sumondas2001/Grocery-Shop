import { createContext, useState } from "react";

export const cartContext = createContext(null);
const Context = ({ children }) => {
     const [addToCard, setAddToCard] = useState(0);
     const [addToFavorites, setAddToFavorites] = useState(0);

     const info = { setAddToCard, addToCard, addToFavorites, setAddToFavorites }
     return (
          <cartContext.Provider value={info}>
               {children}
          </cartContext.Provider>
     );
};

export default Context;