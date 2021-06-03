import React from "react";

type TValue = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const NavContext = React.createContext([false, () => null] as TValue);
NavContext.displayName = "NavContext";

const NavProvider: React.FC = ({ children }) => {
  const value = React.useState(false);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export function useNav(): TValue {
  const context = React.useContext(NavContext);
  if (context === undefined) {
    throw new Error(`useNav must be used within a NavProvider`);
  }
  return context;
}

export default NavProvider;
